// 오름차순 정렬
// TODO: Library -> 직접 구현
export const ascendingSort = (numbers) => {
  return [...numbers].sort((a, b) => a - b);
};

// 내림차순 정렬
// TODO: Library -> 직접 구현
export const descendingSort = (numbers) => {
  return [...numbers].sort((a, b) => b - a);
};
