module.exports = {
  mode: "production",
  entry: "./src/components/form",
  output: {
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-react",
              "@babel/preset-env"
            ],
            "plugins": [
              "@babel/plugin-proposal-class-properties",
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
  externals: [
    { react: { commonjs: "react", commonjs2: "react", amd: 'react', root: ['React'] } },
    { "react-redux": { commonjs: "react-redux", commonjs2: "react-redux", amd: "react-redux", umd: 'react-redux' } },
    { antd: { commonjs: "antd", commonjs2: "antd", amd: 'antd', umd: 'antd' } }
  ]
};