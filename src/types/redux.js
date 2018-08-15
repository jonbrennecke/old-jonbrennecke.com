/* @flow */
import type State from '../models/State';

export type Action<T> = {
  type: string,
  payload?: T,
};

export type Dispatch = any => any;

export type GetState = () => State;
