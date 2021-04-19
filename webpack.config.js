module.exports = [
  createConfig('./src/index.ts', 'text-water-mask.umd.js', 'TextWaterMask', 'umd'),
  // createConfig('./src/index.ts', 'index.js', 'TextWaterMask', 'commonjs2'),
  createConfig('./src/react.tsx', 'react-text-water-mask.umd.js', 'ReactTextWaterMask', 'umd'),
  // createConfig('./src/react.tsx', 'react.js', 'ReactTextWaterMask', 'commonjs2'),
]


function createConfig(entry, filename, library, target) {
  return {
    entry,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
        umd: 'react',
      },
    },
    output: {
      path: __dirname + '/dist/',
      filename,
      library,
      libraryTarget: target
    }
  }
}