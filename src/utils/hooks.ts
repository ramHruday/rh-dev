import { MutableRefObject, useEffect } from 'react';

export function useOutsideClick(
  ref: MutableRefObject<any>,
  callback: () => void
) {
  const handleClickOutside = (e: any) => {
    if (ref.current?.contains(e.target)) return;
    callback();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
