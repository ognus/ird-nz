var chai = require('chai'),
	expect = chai.expect;

var irdnz = require('../irdnz.js');

describe('irdnz', function () {
	describe('isValid()', function () {
		/* 
		   Tests based on examples from 
		   http://www.ird.govt.nz/resources/9/e/9e408a004e329f16a91bbf8ad6853786/rwt-nrwt-spec-2013+v1.0+.pdf (pages 9 and 10).
		*/
		it('should return true for IRD number 49091850 passed as integer or string', function () {
			expect(irdnz.isValid(49091850)).to.be.true;
			expect(irdnz.isValid("49091850")).to.be.true;
		});

		it('should return true for IRD number 35901981 passed as integer or string', function () {
			expect(irdnz.isValid(35901981)).to.be.true;
			expect(irdnz.isValid("35901981")).to.be.true;
		});

		it('should return true for IRD number 49098576 passed as integer or string', function () {
			expect(irdnz.isValid(49098576)).to.be.true;
			expect(irdnz.isValid("49098576")).to.be.true;
		});

		it('should return true for IRD number 136410132 passed as integer or string', function () {
			expect(irdnz.isValid(136410132)).to.be.true;
			expect(irdnz.isValid("136410132")).to.be.true;
		});

		it('should return true for IRD number 136410133 passed as integer or string', function () {
			expect(irdnz.isValid(136410133)).to.be.false;
			expect(irdnz.isValid("136410133")).to.be.false;
		});

		it('should return false for IRD number 9125568 passed as integer or string', function () {
			expect(irdnz.isValid(9125568)).to.be.false;
			expect(irdnz.isValid("9125568")).to.be.false;
		});
		/*
			Other tests
		*/
		it('should return false for IRD number 1234567890 passed as integer or string', function () {
			expect(irdnz.isValid(1234567890)).to.be.false;
			expect(irdnz.isValid("1234567890")).to.be.false;
		});
	});
});