import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("src/assets/fonts/montserrat-v29-latin-regular.woff2");
  eleventyConfig.addPassthroughCopy("src/assets/fonts/montserrat-v29-latin-700.woff2");

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

