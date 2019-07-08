const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const config = require('./../webpack/webpack.development.config.js');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/dist/",
}));
app.use(express.static( "public" ) );
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'server')));
app.use(webpackHotServerMiddleware(compiler));

const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
    if (error) {

        return console.error(error);

    } else {

        console.log(`Development Express server running at http://localhost:${PORT}`);
    }
});
