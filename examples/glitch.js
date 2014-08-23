var readimage = require("readimage")
var writegif = require("../writegif")
var fs = require("fs")

readimage(fs.readFileSync("./ravenwall.png"), function (err, image) {
  var framecopy = new Buffer(image.frames[0].data.length)
  image.frames[0].data.copy(framecopy)
  for (var i = 0; i < framecopy.length; i += 4) {
    var r = framecopy[i]
    var g = framecopy[i  + 1]
    var b = framecopy[i  + 2]

    framecopy[i] = (r > 30) ? r - 30 : 0
    framecopy[i + 1] = b
    framecopy[i + 2] = g
  }
  image.frames[0].delay = 900
  image.addFrame(framecopy, 100)
  writegif(image, function (err, buffer) {
    fs.writeFileSync("./ravenwall.gif", buffer)
  })
})
