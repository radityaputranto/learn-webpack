const path = require('path');

module.exports = {
    mode: 'production',
    //mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
    },

    watch: true,
    //devtool: false
}