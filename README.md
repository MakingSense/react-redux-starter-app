# React+Redux starter app [![Build Status][travis-image]][travis-url]

Starter application/kit containing the minimum set of frameworks/libraries/technologies to start working with [React](https://reactjs.org/) and [Redux](https://redux.js.org/).

## Motivation

Sometimes we've found ourselves doing the simplest setup for a particular framework/language, specially in the JavaScript world where these days you have tons of good libraries to help you out.

What do we usually look for? If we are talking about JavaScript then a testing framework, a linting tool and a packaging/building well-known stablished process.

Setting up all these things might take some time so it makes sense to prepare something solid and reuse it. There are a lot of awesome boilerplate/templates out there. Unfortunately most of them contains a fair amount of stuff that I don't use or need.

The idea behind this _starter app/kit_ is that you only have the minimum to start developing an application with React and Redux, testing, linting, packaging/building included. There is not a backend dependency. There is not a database to set up. And there is not a single CSS framework applied. You're completely free.

## Included tech/framework/library

Tech | Insights
-----| --------
[React](https://reactjs.org/) | The core JavaScript UI library.
[Redux](https://redux.js.org/) | Manage the state of the application.
[Babel](https://babeljs.io/) | Safely use the next generation JavaScript.
[webpack](https://webpack.js.org/) | Bundle all the assets.
[Jest](https://facebook.github.io/jest/) | Testing framework.
[Enzyme](https://github.com/airbnb/enzyme) | Testing utilities.
[ESLint](https://eslint.org/) | Linting utility.
[EditorConfig](http://editorconfig.org/) | Define file formats and coding styles for all Editors/IDEs.

## Installation

```bash
npm install
```

## Run

For development you can simple type:

```bash
npm start
```

## Build

For production deployments:

```bash
npm run build
```

## Validate

Whether you run `start` or `build` scripts both will execute first a `validation` script which is in charge of running the linting and testing validations.

```bash
npm run validate
```

You can run them in isolation too:

```bash
npm run lint
```

```bash
npm test
```

## Alternatives

There is a big chance this project does not fulfill your needs. We recommend these fantastic alternatives:

1. [Create React App](https://github.com/facebook/create-react-app)
2. [react slingshot](https://github.com/coryhouse/react-slingshot)

Both of them have been here for some time and have very nice communities and support. Please, chech those out!

[travis-url]: https://travis-ci.org/MakingSense/react-redux-starter-app
[travis-image]: https://travis-ci.org/MakingSense/react-redux-starter-app.svg?branch=master
