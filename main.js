const posthtml = require('posthtml')

const html = `
  <div class="text-center" md:class="text-right" lg:class="text-left flex">
    some text
  </div>
`

const result = posthtml()
  .use(require('./tailwind-posthtml-class-extractor.js')())
  .process(html, { sync: true })
  .html

console.log(result)