# Component Boilerplate

This repository has basic settings for building react application in Typescript,
it was strongly inspired by [this](https://github.com/adhrinae/ts-react-parcel/) project.

## Built in settings

- React
- Typescript
- [MobX](https://mobx.js.org/README.html)
- [Jest](https://jestjs.io/) & [react-testing-library](https://github.com/testing-library/react-testing-library)
- [Cypress](https://www.cypress.io/)
- [Parcel](https://parceljs.org/)

## Set up the project

```
git clone git@gitlab.ugo-ife.com:gary/component-boilerplate.git
cd component-boilerplate
npm install
```

## Start development

    npm start

Execute the command and you can run & test the application on [http://localhost:1234](http://localhost:1234) in the browser.

## Build the application

    npm run build

The default output directory is `/dist`. You can change the destination wherever you want.

```
// package.json
// ...
"scripts": {
  // ...
  "build": "... parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'" <- Change here
}
// ...
```

## Unit test the application

    npm test       # run test once
    npm run test-watch # watch mode

You should create the `__tests__` directory in the same location as the files you want to test.
The name of the test file must be `SOURCE.test.ts / tsx / js` or`SOURCE.spec.ts / tsx / js`.

## Execute behavior (end to end) tests

    npm run test-ee       # run test once
    npm run test-ee-watch # watch mode

You have to create your tests in the `cypress/integration`.

