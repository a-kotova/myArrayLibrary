class Chapter {
  map(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(callback(array[i]));
    }
    return output;
  }
}
