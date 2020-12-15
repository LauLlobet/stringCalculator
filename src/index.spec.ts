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
    it('sum an indefinate number of numbers'), () => {
        expect(calculator("1,2,3,4,5,6,7,8,9")).eql(45)
    }
});
