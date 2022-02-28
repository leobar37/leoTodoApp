/* eslint-disable no-console */
import { once } from './func';
import { __DEV__ } from './assertion';

type MessageOptions = {
  condition: boolean;
  message: string;
};

export const warn = once((options: MessageOptions) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.warn(message);
  }
});

export const error = once((options: MessageOptions) => () => {
  const { condition, message } = options;
  if (condition && __DEV__) {
    console.error(message);
  }
});
