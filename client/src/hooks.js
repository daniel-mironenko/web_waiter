import { useState } from "react";

export const useLoadStatus = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  return {
    isLoaded,
    setIsLoaded,
    error,
    setError
  }
};