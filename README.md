# Simple TypeScript Unit Testing Template using Jasmine & Babel

Many existing frameworks like React, Angular already come with preconfigured templates that enable unit testing out of the box.

This project demonstrates how to enable unit testing for your TypeScript project if you don't have any of those.

## Prerequisites

[npm](https://www.npmjs.com/get-npm) should be installed for our example. Please download and install it from [here](https://www.npmjs.com/get-npm) if it's not done already.

## If you'd like run the tests of this project

Simply execute command line instructions in the root of this project:

* `npm install`
* `npm test`

## To configure tests in your own project

Follow this instruction originally taken from [jasmine](https://jasmine.github.io/setup/nodejs.html) official page and then slightly changed to inlcude typings.

```bash
npm init
npm i --save-dev jasmine
npm i @types/jasmine
npx jasmine init
```

Set jasmine as your test script in your package.json

```json
"scripts": { "test": "jasmine" },
```

Change root location of your tests in [`./spec/support/jasmine.json`](./spec/support/jasmine.json) file from `spec` to `app` as it's where our code is stored.

```json
  "spec_dir": "app",
```

As of now you should be able to run `npm test` and execute _javascript_ tests only.
To see how one javascript test may look like please check this file [`./app/services/calculator.spec.js`](./app/services/calculator.spec.js)

## So now let's add a TypeScript support

The approach here is done as follows:

- all `*.ts` files get transpiled into `*.js`
- the test is run over the generated `*.js`

To transpile `.ts` into `.js` files let's use [Babel](https://babeljs.io/) here.

Install Babel

```bash
npm i --save-dev @babel/register @babel/core @babel/cli @babel/polyfill
```

We'd like to add ES2015+ and TypeScript tranformations.

```bash
npm i @babel/preset-env @babel/preset-typescript --save-dev
```

... create [`.babelrc`](.babelrc) in the root of your project with the following setup:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-typescript"]
}
```

We're going to reconfigure jasmine to lookup for spec files in under `./spec/out`.
This folder should be created and added `.gitignore` file.

Let's reflect the change in [`./spec/support/jasmine.json`](./spec/support/jasmine.json):

```json
{
  "spec_dir": "spec/out",
  "spec_files": ["**/*[sS]pec.js"],
  "helpers": ["helpers/**/*.js"],
  "stopSpecOnExpectationFailure": false,
  "random": true
}
```

The last change is to tell npm what to do when we run `npm test`
Let's open [`package.json`](./package.json) and replace the original line

```json
"scripts": { "test": "jasmine" }
```

with this:

```json
  "scripts": {
    "test": "babel app --delete-dir-on-start -d \"spec/out\" app --out-dir \"spec/out\" -x \".ts\" -x \".js\" && jasmine"
  },
```

Let's explain what we do here:

- the first part cleans up the `./spec/out` folder and puts newly transpiled `*.ts` and `*.js` files into it.

  `babel app --delete-dir-on-start -d "spec/out" -x ".ts" -x ".js"`;

- the second part just runs jasmine

So now we just need to add our TypeScript test and see if it works.
To see how a TypeScript test might look like just check the following file [`./app/services/typescript-calculator.spec.ts`](./app/services/typescript-calculator.spec.ts).

To run the tests just use `npm test`.

Happy coding!
