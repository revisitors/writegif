var readimage = require("readimage")
var writegif = require("../writegif")
var fs = require("fs")

readimage(fs.readFileSync("./doge_jump2.gif"), function (err, image) {
  writegif(image, function (err, buffer) {
    fs.writeFileSync("./doge.gif", buffer)
  })
})
