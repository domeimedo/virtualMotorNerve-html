module.exports = {
  mode: 'development',
  entry: {
    "dist/VirtualMotorNerve": './src/VirtualMotorNerve.ts',
    "example/example": './src/example.ts'
  },
  output: {
    path: `${__dirname}`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js'
    ],
  }
};