import { useState } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;
type ValueOrFunction<T> = T | ((val: T) => T);

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Retrieve initial value from localStorage, if available
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to store our value
  const [value, setValue] = useState<T>(initial);

  // Update localStorage whenever the value changes
  const updateValue: SetValue<T> = (val: ValueOrFunction<T>) => {
    const updatedValue =
      typeof val === "function" ? (val as (val: T) => T)(value) : val;
    setValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  };

  return [value, updateValue];
}

export { useLocalStorage };
