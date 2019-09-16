require("ignore-styles");
require("url-loader");
require("file-loader");
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
});
require("./index");
