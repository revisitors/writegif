var readimage = require("readimage")
var writegif = require("../writegif")
var fs = require("fs")

readimage(fs.readFileSync("./ravenwall.png"), function (err, image) {
  writegif(image, function (err, buffer) {
    fs.writeFileSync("./ravenwall.gif", buffer)
  })
})
