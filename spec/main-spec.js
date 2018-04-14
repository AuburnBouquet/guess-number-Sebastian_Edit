const main = require('../main/main.js');

describe('main()', () => {
    it('the number is 1234 and the answer is 1234', function () {
        let input = '1234';
        let result = main('1234', input);
        expect(result).toEqual('4A0B');
    });

    it('the number is 1234 and the answer is 4321', function () {
        let input = '1234';
        let result = main('4321', input);
        expect(result).toEqual('0A4B');
    });

    it('the number is 1234 and the answer is 5678', function () {
        let input = '1234';
        let result = main('5678', input);
        expect(result).toEqual('0A0B');
    });
    it('the number is 1234 and the answer is 1536', function () {
        let input = '1234';
        let result = main('1536', input);
        expect(result).toEqual('2A0B');
    });
    it('the number is 0789 and the answer is 7089', function () {
        let input = '0789';
        let result = main('7089', input);
        expect(result).toEqual('2A2B');
    });
});