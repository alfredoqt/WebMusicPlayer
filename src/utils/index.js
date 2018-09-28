/**
 * 
 * @param {*} promise 
 * @returns: A tuple containing error or data from the promise
 */
export const to = promise => promise.then(data => [null, data]).catch(err => [err, null]);
