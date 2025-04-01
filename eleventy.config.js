export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css");

  eleventyConfig.addPairedShortcode('element', (content, el = 'aside', className) => {
      return `<${el} class="${className}">${content}</${el}>`
    }
  )

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

