class Chapter {
  filter(array, callback) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) output.push(array[i]);
    }
    return output;
  }
}
