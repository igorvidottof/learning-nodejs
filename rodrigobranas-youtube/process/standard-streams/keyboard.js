exports.onReadable = function(callback) {
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read(); // return a Buffer
    if(chunk) {
      callback(chunk.toString());
    }
  });
};
