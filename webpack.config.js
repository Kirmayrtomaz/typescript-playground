module.exports = {  
    entry: __dirname + '/dev/js/script.js',
  
    output: {
          filename: __dirname + '/res/js/script.js'
        },
    resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
        },
    module: {
          loaders: [
                  { test: /\.ts$/, loader: 'ts-loader' }
                ],
      exclude : '/node_modules/'
        }
}
