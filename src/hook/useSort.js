import { useState, useEffect } from 'react';
import { ascendingSort, descendingSort } from '../utils/sort';

const useSort = (number) => {
  const [ascNumber, setAscNumber] = useState([]);
  const [descNumber, setDescNumber] = useState([]);

  useEffect(() => {
    if (!number.length) return; // 첫 마운트 제외

    setAscNumber(ascendingSort([...number]));
    setDescNumber([]);

    setTimeout(() => {
      setDescNumber(descendingSort([...number]));
    }, 3000);
  }, [number]);

  return [ascNumber, descNumber];
};

export default useSort;
