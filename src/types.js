// @flow

import { Result } from 'lemons';

export type Decoder<T> = any => T;
export type JSType = 'string' | 'number' | 'boolean' | 'object' | 'undefined';
export type Predicate<T> = T => boolean;
export type Verifier<T> = any => Result<string, T>;
