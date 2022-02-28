/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useCallback, useState } from 'react';
export const useBoolean = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const on = useCallback((): void => {
    setIsOpen(true);
  }, []);
  const off = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback((): void => {
    setIsOpen((state) => !state);
  }, []);

  return {
    isOpen,
    on,
    off,
    toggle,
  };
};
