import { Decoder } from './types';

export const string: Decoder<string>;
export function regex(regex: RegExp, msg: string): Decoder<string>;
export const email: Decoder<string>;
export function url(schemes?: Array<string>): Decoder<string>;
