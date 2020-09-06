/* eslint-disable arrow-body-style */
/* eslint-disable no-loop-func */
export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  function isPromise(obj) {
    return !!obj
      && (typeof obj === 'object' || typeof obj === 'function') // 初始promise 或 promise.then返回的
      && typeof obj.then === 'function';
  }

  for (let i = 0; i < promises.length; i += 1) {
    if (isPromise(promises[i]) === false) {
      throw new Error('Not all elements are promises.');
    }
  }

  const results = [];
  let cnt = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((val) => {
        results[index] = val;
        if (index === promises.length - 1) {
          if (cnt > 0) {
            reject();
          } else {
            resolve(results);
          }
        }
      })
        .catch(() => {
          cnt += 1;
        });
    });
  });
  // return Promise.all(promises.map(p => p.catch(e => e)));
}
