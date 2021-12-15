# daily check in back


```typescript
// fill env
cp .env.example .env
// download & cache all deps
deno cache ./deps.ts
// migrate database after fill your env file -->
deno run --allow-net --allow-read --allow-env https://deno.land/x/nessie/cli.ts migrate
// run the server
deno run --allow-net --allow-env --allow-read --unstable src/index.ts
```
