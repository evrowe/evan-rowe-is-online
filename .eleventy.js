// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  
  eleventyConfig.addPassthroughCopy("public");
  
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