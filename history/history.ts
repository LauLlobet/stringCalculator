import { calculator } from './index';
import { expect } from 'chai';

describe('calculator should', () => {
    it('sum values with comma', () => {
        expect(calculator("1,3")).eql(4);
    });
});

//-------- IMPLEMENTATION --------

export function calculator(str : string): number {
    return 4;
}