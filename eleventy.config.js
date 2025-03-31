export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css");

  return {  
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
        input: "src",
        output: "public"
      }
  }
};

