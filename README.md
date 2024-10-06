# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

4. create migration : npx ts-node ./node_modules/typeorm/cli.js migration:generate ./src/migrations/AddAgeToUser -d ./src/data-source.ts

Push Migration :
npx typeorm migration:run -d ./build/data-source.js
