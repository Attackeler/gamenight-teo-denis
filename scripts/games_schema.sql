-- Gamenight — games catalogue table (Supabase / Postgres)
-- Run this once in the Supabase SQL editor (or via a migration) before importing.

create extension if not exists pg_trgm;  -- for fast name search

create table if not exists public.games (
  bgg_id            integer primary key,
  name              text not null,
  year              integer,
  description       text,
  image_url         text,
  thumbnail_url     text,
  min_players       integer,
  max_players       integer,
  min_time          integer,          -- minutes
  max_time          integer,
  playing_time      integer,
  weight            numeric(4,2),     -- BGG average weight, 1..5
  difficulty        text,             -- 'Light' | 'Medium' | 'Hard' (derived from weight)
  rank              integer,          -- BGG overall rank (1 = best)
  categories        text[] default '{}',
  mechanics         text[] default '{}',
  scoring_archetype text default 'highest_total',  -- default win-condition archetype
  source            text default 'bgg',
  updated_at        timestamptz default now()
);

create index if not exists games_minp_idx   on public.games (min_players);
create index if not exists games_maxp_idx   on public.games (max_players);
create index if not exists games_rank_idx   on public.games (rank);
create index if not exists games_cat_idx    on public.games using gin (categories);
create index if not exists games_name_trgm  on public.games using gin (name gin_trgm_ops);

-- Row Level Security: any signed-in user can read; only the service role writes (the import script).
alter table public.games enable row level security;

drop policy if exists "games readable by authenticated" on public.games;
create policy "games readable by authenticated"
  on public.games for select to authenticated using (true);

-- ---------------------------------------------------------------------------
-- Player-count search — your rule:
--   a game matches a query [qmin, qmax] when it COVERS the whole range
--   (min <= qmin, max >= qmax) and does NOT start more than one player below
--   your minimum (min >= qmin - 1).
--   So  3–5  matches 3-5, 2-6, 2-5, 3-7  but NOT 1-5 (starts 2 below) or 2-4 (can't reach 5).
--   A single number n means qmin = qmax = n.
-- ---------------------------------------------------------------------------
create or replace function public.search_games_by_players(qmin int, qmax int)
returns setof public.games
language sql stable as $$
  select *
  from public.games
  where min_players >= qmin - 1
    and min_players <= qmin
    and max_players >= qmax
  order by rank nulls last;
$$;

-- Example:
--   select name, min_players, max_players from public.search_games_by_players(3, 5);
