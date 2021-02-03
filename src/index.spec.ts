import { calculator } from './index';
import { expect , assert} from 'chai';

describe('calculator should', () => {
    it('sum values with comma', () => {
        expect(calculator("1,3")).eql(4);
        expect(calculator("2,3")).eql(5);
    });
    it('empty string is zero', () => {
        expect(calculator("")).eql(0);
    });
    it('sum an indefinate number of numbers', () => {
        expect(calculator("1,2,3,4,5,6,7,8,9")).eql(45);
    });
    it('reject bad separators format', () => {
        assert.throws(() => calculator("1,"), Error, "not well separated");
        assert.throws(() => calculator("1,2,,1"), Error, "not well separated");
        assert.throws(() => calculator(",1,2,3"), Error, "not well separated")
    });
    it('handle jumplines as commas',() => {
        expect(calculator("1,2\n3")).eql(6)
    })
    it('accept changing the delimiter character',() => {
        expect(calculator("//d\n1d2d1")).eql(4)
        expect(calculator("//q\n1q2q1")).eql(4)
    })
    it('accept changing the delimiter character even with jumplines as separators',() => {
        expect(calculator("//q\n1q2\n1")).eql(4)
    })

    it('reject bad non comma separators', () => {
        assert.throws(()=> calculator("//d\n1d2dd3"))
    })
    it('reject negatives', () => {
        assert.throws(()=> calculator("1,2,-30,2,1"), Error, "negatives -30 found")
        assert.throws(()=> calculator("1,2,-30,2,-1"), Error, "negatives -30 -1 found")
    })
});
