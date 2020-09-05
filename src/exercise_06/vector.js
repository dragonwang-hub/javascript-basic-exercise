export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // PLEASE DELETE THIS LINE AND ADD YOUR IMPLEMENTATION HERE
  constructor(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'x', {
      writable: false,
      value: x || 'empty',
    });
    Object.defineProperty(this, 'y', {
      writable: false,
      value: y || 'empty',
    });
  }

  static plus(first, second) {
    const xplus = first.x + second.x;
    const yplus = first.y + second.y;
    const result = new Vector(xplus, yplus);
    return result;
  }

  static minus(first, second) {
    const xminus = first.x - second.x;
    const yminus = first.y - second.y;
    const result = new Vector(xminus, yminus);
    return result;
  }

  distance() {
    const result = Math.sqrt((this.x ** 2) + (this.y ** 2));
    return result;
  }
}
