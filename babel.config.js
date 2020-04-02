
// module.exports = {
//   "presets": [
//     ["env", { "modules": false }],
//     "stage-3"
//   ],
//   "plugins": ["transform-runtime"]
// };

module.exports = {
  "presets": ["@babel/env"], // "@babel/preset-env"
  "plugins": ["@babel/plugin-transform-runtime"], // same as "@babel/plugin-transform-arrow-functions"
};