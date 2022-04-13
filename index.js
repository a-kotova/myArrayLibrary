const chapter = (function() {
  const skip = function(array, n) {
    const output = array.slice();
    output.splice(0, n);
    return output;
  }

  return {
    skip
  }
})();
