# TL;DR

It uses postHTML to turn ...

```
<div class="text-center" md:class="text-right" lg:class="text-left flex">
    some text
</div>
```

into ...

```
<div class="lg:text-left lg:flex md:text-right text-center">
    some text
  </div>
```
.

The benefit is you don't have long ass class list in your HTML. Consider

```
<div class="text-center flex flex-row md:flex-col md:flex-wrap lg:text-right text-sm xl:text-lg ml-4 md:ml-2 mt-2 lg:mt-8">
```

Instead you could have...

```
<div 
    class="text-center flex flex-row text-sm ml-4 mt-2"
    md:class="flex-col flex-wrap ml-2"
    lg:class="text-right mt-8"
    xl:class="text-lg">
```

Use it with

```
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
```