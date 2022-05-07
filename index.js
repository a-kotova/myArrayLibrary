class Chapter {
  constructor() {
    this.result = null;
  }

  filter(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) output.push(array[i]);
    }
    return output;
  }

  reduce(sourceItem, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : callback;

    if (typeof sourceItem === 'function') {
      if (callback === undefined) throw new Error('Missing argument: please specify an initial value');
      for (let element of this.result) {
        accumulator = sourceItem(accumulator, element);
      }

      return accumulator;
    }

    if (initialValue === undefined) throw new Error('Missing argument: please specify an initial value');

    for (let element of sourceItem) {
      accumulator = callback(accumulator, element);
    }

    return accumulator;
  }

  map(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(callback(array[i]));
    }
    return output;
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

  chain(array) {
    this.result = [...array];
    return this;
  }

  value() {
    return this.result;
  }
}

module.exports = new Chapter();
