# Webpack Learning Project

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install webpack webpack-cli --save-dev
npm run build

#developement
npm run dev
npm run serve

#watch webpack
npm run watch
```

```bash
# install css loader = for include style css in bundle.js
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install sass-loader sass --save-dev
npm install bootstrap --save-dev

#support for older brwoser not support ES6 module
npm install -D babel-loader @babel/core @babel/preset-env

#automatic genereate index.html from webpack using plugins
npm install --save-dev html-webpack-plugin

#merge webpack config
npm install webpack-merge --save-dev

#manage assets
npm install --save-dev mini-css-extract-plugin

#webpack web server
npm install --save-dev webpack-dev-server

#html loader
npm install --save-dev html-loader

#js utilitties
npm install --save lodash

#css minimizer
npm install css-minimizer-webpack-plugin --save-dev

#purge = for delete unused classname from bootstrap
npm i purgecss-webpack-plugin -D

#compress image
npm install image-minimizer-webpack-plugin @squoosh/lib --save-dev
```
