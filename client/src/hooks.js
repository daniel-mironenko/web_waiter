import { useEffect, useRef, useState } from "react";

export const useLoadStatus = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  return {
    isLoaded,
    setIsLoaded,
    error,
    setError
  }
};

export function usePrevious(value) {
  const ref = useRef();
  
  useEffect(() => {
    ref.current = value;
  }, [value]); 

  return ref.current;
}