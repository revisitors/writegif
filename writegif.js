var GifEncoder = require("gif-encoder")
var concat = require("terminus").concat

module.exports = writegif

function writegif(image, callback) {
  var out = concat(function (buffer) {
    callback(null, buffer)
  })

  var gif = new GifEncoder(image.width, image.height)

  gif.pipe(out)

  gif.writeHeader()


  if (image.frames.length > 1) {
    gif.setRepeat(0)
  }

  image.frames.forEach(function (frame) {
    if (frame.delay) {
      gif.setDelay(frame.delay)
    }
    gif.addFrame(frame.data)
  })


  gif.finish()
}
