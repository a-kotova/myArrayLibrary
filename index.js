class Chapter {
  reduce(array, callback, initialValue) {
    try {
      if (initialValue === undefined) throw new Error();
      let accumulator = initialValue;
      for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
      }
      return accumulator;
    } catch(error) {
        console.error('Missing argument: please specify an initial value');
    }
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
