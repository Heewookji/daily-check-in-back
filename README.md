# daily check in back


```typescript
// fill env
cp .env.example .env
// download & cache all deps
deno cache ./deps.ts
// migrate database after fill your env file
deno run -A --unstable https://deno.land/x/nessie/cli.ts migrate
// seed database
deno run -A --unstable https://deno.land/x/nessie/cli.ts seed
// run the server
deno run --allow-net --allow-env --allow-read --unstable src/index.ts
```

```typescript
// rollback migration
deno run -A --unstable https://deno.land/x/nessie/cli.ts rollback
```
