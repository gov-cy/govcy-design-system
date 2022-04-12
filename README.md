[![Docker](https://github.com/gov-cy/govcy-design-system/actions/workflows/main.yml/badge.svg)](https://github.com/gov-cy/govcy-design-system/actions/workflows/main.yml)

# govcy-design-system
GOV.CY design system code.

This is the readme for the govcy-design-system repository.

The GovCy Design System is a package containing:
* [SASS](https://sass-lang.com/) files (in `/src`) which compile into a [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp) you can use in your services html files to get the look and feel of a GOV.CY service
* An already compiled and minified [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp) so you don't have to compile it yourself, located in `/dist`
* A set of development dependencies to make developing easier, these are installed by [npm](https://www.npmjs.com/) and listed in `package.json`
* A set of commands to compile the [SASS files](https://sass-lang.com/) into a [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp)
* A command to run a [simple command line development server](https://github.com/http-party/http-server)
* A development site where you can see the components and styles that are a result of the css located at `build/index.html`

## Updating Documentation

The documentation site resides in the `build` folder.

## Installation

`govcy-design-system` uses [NPM](https://www.npmjs.com) to manage it's dependencies. Therefore it is a requirement of installing the design system.

You can find information about installing NPM [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

We use `npm>=8.x` to make use of the `package.json::overrides` functionality.

```
git clone https://github.com/gov-cy/govcy-design-system.git
cd govcy-design-system
npm install
```

## Commands

#### npm run css-build

The `css-build` command:

* compiles the sass files in `/src/sass` into a css stylesheet and puts it with the development server files in `/build/css` ready to be served by the development server
* copies the javascript file `/src/js/app.js` from `/src/js` to `/build/js` ready to be served by the development server

#### npm run css-build-distribution

The `css-build-distribution` command:

Compiles the sass files in `/src/sass` into a _minified_ css stylesheet and puts it in `/dist/css` ready to be distributed as a release and included in other peoples websites.


#### npm run start

The `start` command:

Runs a [simple command line development server](https://github.com/http-party/http-server) that serves the static files in the `/build` directory on port 3000. This means that when you have run this command you should be able to see your version of the Design System at [http://localhost:3000](http://localhost:3000)

The `/build/index.html` file is a [magic file](https://github.com/http-party/http-server#magic-files) which forms the entry point for the documentation/ design system.

#### npm run css-start / npm run css-watch / npm run watch-css

The watch css commands:

* All do the same thing
* Watch the sass files in `/src/sass` and check for any changes. When it detects changes it re compiles the sass into a css stylesheet into the `/build/css` directory automatically. This means that if you are also running the development server you can just refresh the page to see your changes.

## Tests

### Linting

We have automated code quality/ linting tests that are run using [sass-lint](https://github.com/sasstools/sass-lint).This library is currently maintained but we haven't found a suitable alternative. Occasionally it causes problems with sub-dependencies/ transitive dependencies that need to be overriden. See the [Dependency Management section of this guidance](#dependency-management) for more information or the `package.json::overrides` section.

The linting is controlled by the configuration file ar [test/config/.sasslintrc](test/config/.sasslintrc). You can read more about how to configure [sass-lint here](https://github.com/sasstools/sass-lint#configuration-documentation).

The configuration file ([test/config/.sasslintrc](test/config/.sasslintrc)) is provided to the [sass-lint](https://github.com/sasstools/sass-lint) command line tool by the [package.json::sasslintConfig](package.json) entry.

These are currently run by a simple [Github Actions](https://github.com/features/actions) action found at [.github/workflows/sass-lint.yml](.github/workflows/sass-lint.yml)

### Visual Regression

We have visual regression tests that are required to pass before pull requests are merged. There are a number of components used to make this happen, they are explained below.

#### [Percy](https://percy.io/)

'Percy' is a service/ website that allows you to upload and check visual regression images. It shows a nice diff on the interface that one can apporve or reject. If you send it 2 screenshots it will tell you the difference between them.

#### [http-server](https://www.npmjs.com/package/http-server/)

`http-server` is a lightweight javascript development web server. In our tests it is used to 'serve' our web pages that are screenshotted.

#### [puppeteer](https://github.com/puppeteer/puppeteer)

`puppeteer` is a library that provides a browser to visit the served pages and take the screenshots.

#### [percy/puppeteer](https://docs.percy.io/docs/puppeteer)

`percy/puppeteer` is just a customised distribution of the above with some small tweaks to make it work better with Percy.

#### [Mocha](https://mochajs.org/#the-test-directory)

Is a testing framework and command that will find all our tests and run them one by one.

#### [percy/cli](https://github.com/percy/cli)

`percy/cli` is a group of shortcut commands that upload the resulting screenshots to the service/ website.

## Dependency Management

Dependencies are managed in the `package.json` file.

We use [overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides) to control sub dependencies in the case of a security vunerability found in a sub/ transitive dependency.
