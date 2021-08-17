export const ascendingSort = (numbers) => mergeSort(numbers, 'asc');
export const descendingSort = (numbers) => mergeSort(numbers, 'desc');

const mergeSort = (array, order) => {
  if (array.length === 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left, order), mergeSort(right, order), order);
};

const merge = (left, right, order) => {
  const result = [];

  while (left.length !== 0 && right.length !== 0) {
    left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
  }

  return order === 'asc' ? [...result, ...left, ...right] : [...right, ...left, ...result];
};
