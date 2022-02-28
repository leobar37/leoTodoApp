/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnyFunction, SafeAny } from "@app/types";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const once = <T extends AnyFunction>(fn?: T | null) => {
  let result: SafeAny;
  return function func(this: SafeAny, ...args: Parameters<T>) {
    if (fn) {
      result = fn.apply(this, args);
      // eslint-disable-next-line no-param-reassign
      fn = null;
    }
    return result;
  };
};

export const canUseDom = () =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document?.createElement
  );

export const isBrowser = canUseDom();

export const matVa = <Val, T extends string>(val?: T, fallback?: SafeAny) => {
  return (obj: Partial<Record<T, Val>>) => {
    if (!val) {
      return fallback || null;
    }
    const result = obj[val];
    if (!result) {
      return fallback || null;
    }
    return result;
  };
};

export const throttle = (fn: () => void, wait: number) => {
  let time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

export const isUrl = (url?: string) => {
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  return (url || "").match(regex);
};

export const dataToUrl = async (url: string) => {
  return fetch(url)
    .then((d) => d.blob())
    .then((b) => URL.createObjectURL(b));
};

export const sleep = (time: number) =>
  new Promise((res) => setTimeout(res, time));
