export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] instanceof Array) {
      const subArray = array[i];
      for (let j = 0; j < subArray.length; j += 1) {
        result.push(subArray[j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
