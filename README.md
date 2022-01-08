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
// run and watch the server (install once)
deno install -qAf --unstable https://deno.land/x/denon/denon.ts 
denon run --allow-net --allow-env --allow-read --unstable src/index.ts
```

```typescript
// format code
deno fmt
```

```typescript
// rollback migration
deno run -A --unstable https://deno.land/x/nessie/cli.ts rollback
```
