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

  reduce(array, callback, initialValue) {
    if (initialValue === undefined) throw new Error('Missing argument: please specify an initial value');
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
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

  forEach(sourceItem, callback) {
    if (typeof sourceItem === 'function') {
      for (let element of this.result) {
        sourceItem(element);
      }
    } else {
      for (let element of sourceItem) {
        callback(element);
      }
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
