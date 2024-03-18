const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
        ignored: '/node_modules/',
        aggregateTimeout: 300,
        poll: 1000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|tts|otf)$/i,
                use: 'asset/resource',
            },
        ],
    },
};