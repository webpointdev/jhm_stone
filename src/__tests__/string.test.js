// @flow

import { partition } from 'itertools';

import { guard } from '../guard';
import { regex, string } from '../string';
import { INPUTS } from './fixtures';

describe('string', () => {
    const decoder = guard(string);
    const [okay, not_okay] = partition(INPUTS, x => typeof x === 'string');

    it('valid', () => {
        expect(okay.length).not.toBe(0);
        for (const value of okay) {
            expect(decoder(value)).toBe(value);
        }
    });

    it('invalid', () => {
        expect(not_okay.length).not.toBe(0);
        for (const value of not_okay) {
            expect(() => decoder(value)).toThrow();
        }
    });
});

describe('string', () => {
    const decoder = guard(regex(/[0-9]{4}-[0-9]{2}-[0-9]{2}/, 'Must be YYYY-MM-DD'));

    it('valid', () => {
        expect(decoder('2017-12-16')).toBe('2017-12-16');
        expect(decoder('1999-99-55')).toBe('1999-99-55'); // Remember, just regexes not valid dates! ;)
        expect(decoder("Party like it's 1999-01-01")).toBe("Party like it's 1999-01-01"); // Remember, regex is unbounded
    });

    it('invalid', () => {
        expect(() => decoder(42)).toThrow('Must be string'); // All regexes must be strings
        expect(() => decoder('11-22-33')).toThrow('Must be YYYY-MM-DD');
        expect(() => decoder('invalid')).toThrow('Must be YYYY-MM-DD');
    });
});
