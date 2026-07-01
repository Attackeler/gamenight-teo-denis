CREATE table if not exists players (
    id bigint generated always as identity primary key,
    username text not null,
    score int,
    friends_number int
)