const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/scss/")
    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addPassthroughCopy("./src/js")
    eleventyConfig.addPassthroughCopy("./src/css")

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

    eleventyConfig.addCollection("blog", collection => {
        return [...collection.getFilteredByGlob('./src/articles/*.md')].reverse()
    })

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: "src",
            output: "public",
        }
    }
}