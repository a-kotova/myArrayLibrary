class Chapter {
  constructor() {
    this.result = null;
  }

  filter(sourceItem, callback) {
    const output = [];

    if (typeof sourceItem === 'function') {
      for (let element of this.result) {
        if (sourceItem(element)) {
          output.push(element);
        }
      }
      this.result = [...output];

      return this;
    }

    for (let element of sourceItem) {
      if (callback(element)) {
        output.push(element);
      }
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

  map(sourceItem, callback) {
    const output = [];

    if (typeof sourceItem === 'function') {
      for (let element of this.result) {
        output.push(sourceItem(element));
      }
      this.result = output;

      return this;
    }

    for (let element of sourceItem) {
      output.push(callback(element));
    }

    return output;
  }

  forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

  skip(sourceItem, n) {
    if (typeof sourceItem === 'number') {
      const output = this.result.slice();

      output.splice(0, sourceItem);
      this.result = output;
      return this;
    }

    const output = sourceItem.slice();

    output.splice(0, n);
    return output;
  }

  take(sourceItem, n) {
    if (typeof sourceItem === 'number') {
      this.result = this.result.slice(0, sourceItem);
      return this;
    }
    return sourceItem.slice(0, n);
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
