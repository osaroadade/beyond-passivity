module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/scss/")
    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addPassthroughCopy("./src/js")
    eleventyConfig.addPassthroughCopy("./src/css")

    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}