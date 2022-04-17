class Chapter {
  skip(array, n) {
    const output = array.slice();
    output.splice(0, n);
    return output;
  }
}
