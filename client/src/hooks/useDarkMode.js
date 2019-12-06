import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
  //Call useLocalStorage
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if(value === true) {
      document.body.classList.add('dark-mode');
    }else{
      document.body.classList.remove('dark-mode');
    }
  }, [setValue]);

  return [value, setValue]

};

export default useDarkMode;