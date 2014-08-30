writegif
=====

[![NPM](https://nodei.co/npm/writegif.png)](https://nodei.co/npm/writegif/)

Take an image in the format output by http://npm.im/readimage and write it to a gif.

```javascript
var readimage = require("readimage")
var writegif = require("writegif")
var fs = require("fs")

readimage(fs.readFileSync("./examples/ravenwall.png"), function (err, image) {
  writegif(image, function (err, buffer) {
    fs.writeFileSync("./ravenwall.gif", buffer)
  })
})

```

More examples are in the examples/ folder!

API
===

`require("writegif")(imageBuffer, callback)`
---

Write a buffer that represents a gif image generated from the imageBuffer.

`require("writegif")(imageBuffer, options, callback)`
---

The same as above, but `options` can contain:

```js
{
  // 1: Best colors, worst performance
  // 200: default, worst colors, best performance
  quality: 10
}
```

LICENSE
=======

MIT
