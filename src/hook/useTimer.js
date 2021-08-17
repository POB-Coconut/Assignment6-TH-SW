import { useState, useEffect } from 'react';
import { setKoreaTime } from '../utils/time';

const useTimer = (type) => {
  const [time, setTime] = useState(setKoreaTime(type));

  useEffect(() => {
    setInterval(() => {
      setTime(setKoreaTime(type));
    }, 1000);
  }, [type]);

  return time;
};

export default useTimer;
