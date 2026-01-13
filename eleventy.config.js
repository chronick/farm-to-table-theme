module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("site/images");

  // Watch for changes in theme files
  eleventyConfig.addWatchTarget("./themes/");

  return {
    dir: {
      input: "site",
      output: "docs",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk"
  };
};
