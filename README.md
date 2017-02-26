# react-redux-boilerplate
A lightweight and simple React and Redux boilerplate, using Jest as a test harness.

# Getting Started
* `sudo npm i|install`
* `sudo npm run dev|build` (build is prod)


# Features

* Build processes for dev & prod
* Hot reloading
* SCSS compiling

# File Structure
* `src` is where all the code is
* `src/stylesheets` is where all the SCSS goes. Directories used for:
    * `utils` (things like a grid, loaders, and errors)
    * `variables` (colours, widths etc can be kept in here)
    * `ui` (things like a tabslider, gallery or menu)
    * `components` (where styles for more specialised components go)
* `src/modules` is where independent pieces of logic can go so they're reusable (e.g API or form validations)
* `src/common` is where common components are kept
* `src/[component_name]` is how large parent components are made (e.g app)

# Pipeline

* Bundles [React](https://facebook.github.io/react/) with `jsx` syntax
* Compiles ES6 (with [Babel](https://babeljs.io/))
* Linting (with [ESLint](http://eslint.org/))
* Build with [webpack](https://webpack.github.io/)
* Develop locally with [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
* [Jest](https://facebook.github.io/jest/) test harness

### Cheers To

[Cian O'Leary](https://github.com/25564) for teaching me React and helping set up the pipeline. 



