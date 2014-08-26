var GifEncoder = require("gif-encoder")
var concat = require("terminus").concat

module.exports = writegif

// something with GifEncoder isn't correctly resetting the
// state of backpressure it seems like?
var hwm = 128 * 100 * 1024 // HUGE

function writegif(image, opts, callback) {
  if (!callback) { callback = opts; opts = {}; }

  var out = concat(function (buffer) {
    callback(null, buffer)
  })

  var gif = new GifEncoder(image.width, image.height, {highWaterMark: hwm})

  gif.pipe(out)

  gif.writeHeader()

  // default = 10, 200 is maybe a bit smaller sometimes
  gif.setQuality(opts.quality || 200)


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
