import { SafeAny } from "@leo/types";

// eslint-disable-next-line no-underscore-dangle
export const __DEV__ = (process as any).env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const isValid = (value: SafeAny) =>
  value !== null && value !== undefined;

export const isObject = (val: SafeAny): val is SafeAny => {
  const type = typeof val;
  return isValid(val) && type == "object" && !Array.isArray(val);
};
