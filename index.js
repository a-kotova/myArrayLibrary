const chapter = (function() {
  const take = function(array, n) {
    return array.slice(0, n);
  }

  return {
    take
  }
})();
