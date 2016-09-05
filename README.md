# Well hello there!

_All parts of this project, including tasks and configs, excluding node modules, were written line-by-line by yours truly without generators in order to demonstrate learning and proficiency_

## Developing

To serve the app to [http://localhost:8080](http://localhost:8080), run: `gulp`

## Build
To build the necessary JS/JSX files to __/dist__, run: `gulp build`

## Check build
To serve the built app via simple Python HTTP server to [http://localhost:8080](http://localhost:8080), run: `npm run dist`

## Dependencies
_An overview of the packages used to create this project, and why they were included_

**Global**
_You'll need the following installed at the global level `npm i -g`_

- [gulp]

**Dependencies**

- [react] isomorphic React for content handling. I'm still learning React, and taking any opportunity that makes sense to do so.
  - [react-dom] The DOM handler for React, we're mainly concerned with the browser in this app.
- [babel-polyfill] Add ES6 features to our browsers. Do we really need this? Do you like surprises?

[react]: https://github.com/facebook/react
[react-dom]: https://www.npmjs.com/package/react-dom
[babel-polyfill]: https://github.com/babel/babel/tree/master/packages/babel-polyfill

**devDependencies**
- [autoprefixer] Add vendor prefixes to css, keep our fingers busy typing other things.
- css-loader, node-sass, postcss-loader, sass-loader, source-map-loader, style-loader, you can probably deduce these are chained together to make our screens drip with css (via webpack loaders)
- [babel] Give us that sweet sweet ES5 goodness that browsers love
- [eslint] In-editor warnings and compiler errors. Because I like to write accessible code
  - [eslint-config-airbnb] Opnionated javascript style and syntax. I'll admit, I wasn't originally on-board with comma dangles...
- [foundation-sites] Foundation comes with some smart flexy grids and utility classes. We're only using SCSS imports to selectively grab what we want and leave the rest - that's a lot of useless CSS we're leaving behind. That's also why this is a devDependency as it is compiled into our own CSS files.
- [gulp] A task-runner toolkit we're using to conduct our workflow, sits on top of things like webpack and passes sensible configurations.
  - require-dir, gulp-clean, gulp-copy, gulp-util...
- [webpack] For bundling, minifying, optimizing, and hyperbolizing
  - webpack-dev-server, file-loader, html-loader, html-webpack-plugin, json-loader...

[autoprefixer]: https://github.com/postcss/autoprefixer
[babel]: https://github.com/babel/babel
[eslint]: https://github.com/eslint/eslint
[foundation-sites]: https://github.com/zurb/foundation-sites
[gulp]: https://github.com/gulpjs/gulp
[webpack]: https://github.com/webpack/webpack
[eslint-config-airbnb]: https://github.com/airbnb/javascript

_Built with Node 6.4.0 and npm 3.10.6_
