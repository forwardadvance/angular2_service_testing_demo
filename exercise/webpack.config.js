module.exports = {
  entry: {
    app: "./source/app.ts",
    specs: "./source/specs.ts"
  },
  output: {
    filename: "./build/[name].js",
  },
  // entry: '',
  sourceMap: true,
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
