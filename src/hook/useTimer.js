import { useState, useEffect } from 'react';
import { getKST } from '../utils/time';

const useTimer = (type) => {
  const [time, setTime] = useState(getKST(type));

  useEffect(() => {
    setInterval(() => {
      setTime(getKST(type));
    }, 1000);
  }, [type]);

  return time;
};

export default useTimer;
