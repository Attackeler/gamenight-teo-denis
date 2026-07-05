.PHONY: install start-app check-files supabase-start supabase-stop
install: 
	npm install
start-app: supabase-start
	npx expo start --tunnel
check-files:
	npm run lint
	npm run prettier:check
	npm run ts-check	
supabase-start:
	npx supabase start
	npx supabase db reset
supabase-stop:
	npx supabase stop