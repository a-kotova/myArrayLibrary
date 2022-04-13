const chapter = (function() {
  const reduce = function(array, callback, initialValue = null) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
  }

  return {
    reduce
  }
})();
