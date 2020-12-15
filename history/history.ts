import { calculator } from './index';
import { expect } from 'chai';

describe('calculator should', () => {
    it('sum values with comma', () => {
        expect(calculator("1,3")).eql(4);
        expect(calculator("2,3")).eql(5);
    });
    it('empty string is zero'), () => {
        expect(calculator("")).eql(0);
    }
});

//-------- IMPLEMENTATION --------

export function calculator(str : string): number {
    return str.split(',').reduce( (accum,current) => accum + +current, 0)
}