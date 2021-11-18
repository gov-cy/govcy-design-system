# dsf-design-system
Gov.cy DSF design system code and documentation.

This is the readme for the dsf-design-system repository.

The DSF Design System is a package containing:
* [SASS](https://sass-lang.com/) files (in `/src`) which compile into a [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp) you can use in your services html files to get the look and feel of a GOV.CY service
* An already compiled and minified [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp) so you don't have to compile it yourself, located in `/dist`
* A set of development dependencies to make developing easier, these are installed by [npm](https://www.npmjs.com/) and listed in `package.json`
* A set of commands to compile the [SASS files](https://sass-lang.com/) into a [CSS Stylesheet](https://www.w3schools.com/css/css_howto.asp)
* A command to run a [simple command line development server](https://github.com/http-party/http-server)
* A development site where you can see the components and styles that are a result of the css located at `build/index.html`

## Updating Documentation

The documentation site resides in the `build` folder.

## Installation

```
git clone https://github.com/gov-cy/dsf-design-system.git
cd dsf-design-system
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

Runs a [simple command line development server](https://github.com/http-party/http-server) that serves the static files in the `/build` directory on port 3000. This means that when you have run this command you should be able to see your version of the DSF Design System at [http://localhost:3000](http://localhost:3000)

The `/build/index.html` file is a [magic file](https://github.com/http-party/http-server#magic-files) which forms the entry point for the documentation/ design system.

#### npm run css-start / npm run css-watch / npm run watch-css

The watch css commands:

* All do the same thing
* Watch the sass files in `/src/sass` and check for any changes. When it detects changes it re compiles the sass into a css stylesheet into the `/build/css` directory automatically. This means that if you are also running the development server you can just refresh the page to see your changes.