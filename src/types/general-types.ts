/* eslint-disable no-unused-vars */
import { FC, ReactElement, ReactNode, SVGProps } from "react";

export type Elements = JSX.IntrinsicElements;
export type As<T extends keyof Elements = "div"> = {
  as?: T | keyof Elements;
} & Elements[T];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SafeAny = any;
export type AnyFunction<T = SafeAny> = (...args: T[]) => SafeAny;

// eslint-disable-next-line @typescript-eslint/ban-types
export type SvgComponent<P = {}> = FC<SVGProps<SVGSVGElement> & P>;
