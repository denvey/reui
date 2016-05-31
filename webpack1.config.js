const webpack = require('webpack');
const path = require('path');

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        './examples/app.js'
    ],
    output: {
        path: path.join(__dirname, '/examples'),
        filename: 'bundle.js',
        chunkFilename: '[chunkhash:8].chunk.js',
        hotUpdateChunkFilename: '[id].js',
        publicPath: ''
    },
    module: {
        noParse: ['node_modules/react'],
        loaders: [
            { test: /(.js|.jsx)/, exclude: /node_modules/, loader: 'react-hot!babel?cacheDirectory=true' },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    resolve: {
        root: path.join(__dirname, '/src'),
        extensions: ['', '.js', '.json', '.jsx', '.less']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: __dirname + '/examples',
        hot: true
    }
};

module.exports = config;