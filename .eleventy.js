// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
  
  eleventyConfig.setBrowserSyncConfig({
    // https://www.browsersync.io/docs/options/#option-ghostMode
    ghostMode: false
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};