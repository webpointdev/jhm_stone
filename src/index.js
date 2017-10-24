// @flow

/**
 * Elm-like JSON decoders, for use with Flow.
 * See http://elmplayground.com/decoding-json-in-elm-1 for an introduction.
 *
 * Why? All JSON responses coming from our API endpoints are just that: free-form
 * JSON data.  To Flow, the only type classification possilbe is "any" -- effectively
 * turning off all type checks for anything related to JSON.  To the receiving end
 * (our frontend), the structure of that data is completely opaque to any type 
 * checkers since JSON values can be anything: an object, an array, null, a string,
 * a bool, etc.  Our type system is not a runtime type system, so we need a way of
 * "converting" an any-type JSON value into a type that we want to work with in our
 * frontend code base.
 *
 * Elm's solution to this problem is to define composable decoders: functions that
 * take anything and either fail with an error, or guarantee to return the expected
 * type.  In our case, it's fine to fail with a runtime error.
 *
 */
import type { Decoder, Verifier } from './types';

export { compose, decoder, map, predicate } from './utils';

export { array } from './array';
export { boolean } from './boolean';
export { constant, hardcoded, null_, undefined_ } from './constants';
export { dispatch } from './dispatch';
export { either, either3, either4 } from './either';
export { fail } from './fail';
export { mapping } from './mapping';
export { nullable } from './nullable';
export { number } from './number';
export { field, object } from './object';
export { optional } from './optional';
export { string } from './string';
export { tuple2 } from './tuple';

export type { Decoder, Verifier };
