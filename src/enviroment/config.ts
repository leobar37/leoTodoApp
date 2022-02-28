/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { SafeAny } from "@leo/types";
import { warn } from "@leo/utils";
import { defaultConfig } from "./default-config";
import { get} from "lodash";
export let config = defaultConfig;

export type Config = typeof config;

export type PartialConfig = Partial<Config>;

export const getConfig = <Return extends Config>(path?: string): Return => {
  if (!path) {
    return defaultConfig as SafeAny as Return;
  }
  const result = get(defaultConfig, path);
  warn({
    condition: !result,
    message: `Config not have a value in ${path} path`,
  });
  return result;
};

export const setConfig = (conf: PartialConfig): Config => {
  const newConfig = Object.assign(defaultConfig, conf);
  config = newConfig;
  return newConfig;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useConfig = () => {
  return { getConfig, setConfig, config };
};
