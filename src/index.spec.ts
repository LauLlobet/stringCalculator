import { calculator } from './index';
import { expect } from 'chai';

describe('calculator should', () => {
    it('sum values with comma', () => {
        expect(calculator("1,3")).eql(4);
        expect(calculator("2,3")).eql(5);
    });
});
