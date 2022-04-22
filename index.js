class Chapter {
  reduce(array, callback, initialValue) {
      if (initialValue === undefined) throw new Error('Missing argument: please specify an initial value');
      let accumulator = initialValue;
      for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
      }
      return accumulator;
  }

  forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

  skip(array, n) {
    const output = array.slice();
    output.splice(0, n);
    return output;
  }

  take(array, n) {
    return array.slice(0, n);
  }
}

module.exports = new Chapter();
