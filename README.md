A simple ***Babel*** test app for ***ES2015*** sample

From: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them

Setting Up the Babel CLI
The live REPL is slick, but writing your entire codebase that way would suck. Let's save ourselves some work and set up the Babel CLI.

To get started:

Create a directory somewhere;
Initialize it as an NPM project;
Install the Babel tool, along with the presets and plugins we'll be using; and
Configure Babel to use those presets and plugins.
```
# This moves to your home directory to create the folder. 
# If you don't want it there, cd somewhere else.

cd && mkdir babel_example && cd $_
npm init
# Hit ENTER a bunch of times . . . 

npm install --save-dev babel-cli babel-preset-es2015 babel-plugin-transform-async-to-generator  
```
This will install the Babel CLI (babel-cli); a collection of plugins enabling all the ES2015 features that Babel supports (babel-preset-es2015); and a plugin allowing you to use the ES7 proposal, Async functions (babel-plugin-transform-async-to-generator).

To run Babel, you simply type babel <FILENAME>. But before we do that, we need to tell it what plugins to use. Babel looks for this information in a file called .babelrc, in the top level of your NPM project.
```
{
    "presets": ["es2015"],
    "plugins": ["transform-async-to-generator"]
}
  ```
Now, copy the snippet from above with the Planet class into an `index.js`, and run `babel index.js --out-file index.transpiled.js --source-maps`. This will create a transpiled version of `index.js`, in `index.transpiled.js`, and a separate sourcemap file, index.transpiled.js.map. A source map is a file that tells the browser which lines of your transpiled code correspond to which lines of your original source, so you can debug `index.js` directly.

Babel's output in `index.transpiled.js`

If you want to transpile your file every time you save changes, you can run:

`babel index.js --out-file index.transpiled.js --source-maps --watch`
