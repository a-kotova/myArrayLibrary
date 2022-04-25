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

    if (typeof array === 'function') {
      for (let i = 0; i < this.result.length; i++) {
        output.push(array(this.result[i]));
      }

      this.result = output;

      return this;
    } else {
      for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
      }

      return output;
    }
  }

  forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

  skip(array, n) {
    if (typeof array === 'number') {
      const output = this.result.slice();

      output.splice(0, array);
      this.result = output;
      return this;

    } else {
      const output = array.slice();

      output.splice(0, n);
      return output;
    }
  }

  take(array, n) {
    if (typeof array === 'number') {
      this.result = this.result.slice(0, array);
      return this;
    }
    return array.slice(0, n);
  }

  chain(array) {
    this.result = array;
    return this;
  }
}

module.exports = new Chapter();
