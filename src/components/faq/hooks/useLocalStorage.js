import { useState, useEffect } from "react";

/**
 * @param {string} key - localStorage key
 * @param {*} initialValue - initial value or function returning initial
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : (typeof initialValue === "function" ? initialValue() : initialValue);
    } catch (error) {
      console.warn(`useLocalStorage: failed to parse key "${key}"`, error);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`useLocalStorage: failed to set key "${key}"`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
