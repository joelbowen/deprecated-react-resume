# Well hello there!

_All parts of this project, excluding node modules, were written line-by-line by yours truly in order to show learning and proficiency_

## Developing

To serve the app to [http://localhost:8080](http://localhost:8080), run: `npm run dev`

## Build
To build the necessary JS/JSX files to __/dist__, run: `npm run build`

## Check build
To serve the built app to [http://localhost:8080](http://localhost:8080), run: `npm run dist`

## Dependencies
_An overview of the packages used to create this project, and why they were included_

- [react] isomorphic React for content handling. I'm still learning React, and taking any opportunity that makes sense to do so.
  - [react-dom] The DOM handler for React, we're mainly concerned with the browser in this app.
- [babel-polyfill] Add ES6 features to our browsers. Do we really need this? Do you like surprises?

[react]: https://github.com/facebook/react
[react-dom]: https://www.npmjs.com/package/react-dom
[babel-polyfill]: https://github.com/babel/babel/tree/master/packages/babel-polyfill

**devDependencies**
- [babel] Give us that sweet sweet ES5 goodness that browsers love
- [eslint] In-editor warnings and compiler errors. Because I like to write accessible code
  - [eslint-config-airbnb] Opnionated javascript style and syntax. I'll admit, I wasn't originally on-board with comma dangles...
- [webpack] For bundling, minifying, optimizing, and hyperbolizing

[babel]: https://github.com/babel/babel
[eslint]: https://github.com/eslint/eslint
[webpack]: https://github.com/webpack/webpack
[eslint-config-airbnb]: https://github.com/airbnb/javascript

_Built with Built with Node 6.4.0 and npm 3.10.6_
