/**
 * Remove an element from an array of objects and return the new array
 * @param arr Array
 * @param key key used to find the index of element to be removed
 * @param value value to be matched against in the object
 */
export function remove<T extends object, K extends keyof T>(arr: T[], key: keyof T, value: T[K]): T[] {
  const copy = arr.slice();
  const index = arr.findIndex(el => el[key] === value);
  copy.splice(index, 1);
  return copy;
}
