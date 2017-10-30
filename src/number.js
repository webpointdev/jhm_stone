// @flow

import { Ok } from 'lemons';

import { makeErr } from './error';
import type { Decoder } from './types';
import { compose, predicate } from './utils';

export const anyNumber: Decoder<number> = (blob: any) => {
    return typeof blob === 'number' && !Number.isNaN(blob) ? Ok(blob) : makeErr('Must be number', blob, []);
};

export const number: Decoder<number> = compose(anyNumber, predicate(Number.isFinite, 'Number must be finite'));
export const positiveNumber: Decoder<number> = compose(number, predicate(n => n >= 0, 'Number must be positive'));

// Integers
export const integer: Decoder<number> = compose(number, predicate(Number.isInteger, 'Number must be an integer'));
export const positiveInteger: Decoder<number> = compose(
    number,
    predicate(n => n >= 0 && Number.isInteger(n), 'Number must be an integer')
);
