# TypeScript Unit Testing Template

Many existing frameworks like React, Angular already come with the preconfigured templates that enable unit testing out of the box.

This project demonstrates how to enable unit testing for your TypeScript project idependent from framework you use.

## Prerequisites

npm should be installed for our example. Please download and install it from [here](https://www.npmjs.com/get-npm) if it's not done already.

## To run the tests

Simply execute command line instruction `npm test` in the root of this project.

## To configure the tests in your own project

Follow this instruction that is taken from [jasmine](https://jasmine.github.io/setup/nodejs.html) official page.

```bash
npm init
npm install --save-dev jasmine
npx jasmine init
```

Set jasmine as your test script in your package.json

```json
"scripts": { "test": "jasmine" }
```

Change root location of your tests in `./spec/support/jasmine.json` file from `spec` to `app` as it's where our code is stored.

```json
  "spec_dir": "app",
```
