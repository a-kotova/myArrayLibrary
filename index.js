class Chapter {
  filter(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) output.push(array[i]);
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
}

module.exports = new Chapter();
