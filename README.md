# Monorepo

`npx lerna run start` to run all packages  
`npx lerna run start --scope '{shell,rfq}'` to run some packages  
`npx nx graph` to generate deps graph  
`npx lerna run test --since=HEAD` to test affected by change

# Demo

### Local
1. run app with all packages
1. run app without shared-ui-components `npx lerna run start --scope '{shell,rfq}'`

### Test
1. run tests `npx lerna run test`
1. run tests in package `npx lerna run test --scope '{shell,rfq}'`
1. change some Rfq file and run tests since `npx lerna run test --since=HEAD`

### Docker
1. run docker compose `docker-compose up -d --remove-orphans`
1. stop shared-ui-components rerun docker-compose up
1. change Rfq.tsx rebuild by `npx lerna run build --concurrency 4 --since HEAD` and rerun docker-compose up