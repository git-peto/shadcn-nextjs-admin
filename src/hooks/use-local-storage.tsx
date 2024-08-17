"use client";

import { useEffect, useState } from 'react';

interface LocalStorageProps<T> {
  key: string;
  defaultValue: T;
}

export default function useLocalStorage<T>({
  key,
  defaultValue,
}: LocalStorageProps<T>) {
  const [value, setValue] = useState<T>(() => {
    let storedValue;
    if (typeof window !== "undefined") {
      storedValue = localStorage.getItem(key);
    } else {
      storedValue = null;
    }
    return storedValue !== null ? (JSON.parse(storedValue) as T) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
