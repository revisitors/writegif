var test = require("tape")

var writegif = require("../writegif")

var fs = require("fs")
var readimage = require("readimage")
var readfile = function (filename, cb) {
  var buf = fs.readFileSync(__dirname + "/" + filename)
  readimage(buf, cb)
}


test("convert", function (t) {
  readfile("../examples/ravenwall.png", function (err, png) {
    t.notOk(err)
    writegif(png, function (err, gif) {
      t.notOk(err)
      t.equals(gif.slice(0, 4).toString(), "GIF8")
      t.end()
    })
  })
})
