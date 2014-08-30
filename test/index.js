var path = require('path')
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

test('convert with option', function (t) {
  var p = path.join(__dirname, '../examples/ravenwall.png');
  var buf = fs.readFileSync(p)
  readimage(buf, function(err, png) {
    t.notOk(err);
    writegif(png, { quality: 10 }, function(err, gif) {
      t.notOk(err)
      t.equals(gif.slice(0, 4).toString(), 'GIF8')
      t.end()
    })
  })
})
