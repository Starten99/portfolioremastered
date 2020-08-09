const autoprefixer = require("autoprefixer");

module.exports = function() {
  return {
    plugins: [
      autoprefixer({
        overrideBrowserslist: ["last 4 versions", "last 4 ie version"]
      }),

    ]
  };
};