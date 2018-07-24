const path = require('path');

const relative = path.join.bind( path, __dirname );

module.exports = {
    entry: { 
        one: relative( 'src/one.js' ), 
        two: relative( 'src/two.js' ) 
    },
    output: {
        path: relative( 'dist' ),
        filename: '[name].[chunkhash].js',
        chunkFilename: 'chunk-[name].[chunkhash].js'
    },
    optimization: {
        splitChunks: false,
        runtimeChunk: true,
        moduleIds: 'named',
        chunkIds: 'named',
        minimize: false
    }
};