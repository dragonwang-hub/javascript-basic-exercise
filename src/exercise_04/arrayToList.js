export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  function ListNode(value, next) {
    this.value = value;
    this.next = next;
  }
  const firstNode = new ListNode(array[0], null);
  let currNode = firstNode;
  for (let i = 1; i < array.length; i += 1) {
    const nextNode = new ListNode(null, null);
    currNode.next = nextNode;
    nextNode.value = array[i];
    currNode = currNode.next;
  }
  return firstNode;
}
