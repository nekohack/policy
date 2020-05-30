const cleanCss = require('clean-css')
const htmlMinifer = require('html-minifier')
const eleventyPluginPwa = require('eleventy-plugin-pwa')

module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('src/icons')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleanCss({}).minify(code).styles
  })
  eleventyConfig.addTransform('htmlMinifer', function(content, outputPath) {
    if (outputPath.endsWith('.html')) {
      return  htmlMinifer.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }
    return content
  })
  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false
  })
  eleventyConfig.addPlugin(eleventyPluginPwa)
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
