module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      "module:react-native-dotenv",
      "module:metro-react-native-babel-preset",
      "babel-preset-expo"
    ],
    plugins: [
      "@babel/plugin-proposal-export-default-from",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      "@babel/plugin-transform-runtime"
    ]
  };
};
