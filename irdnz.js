/**
* Checksum validator for New Zealand's IRD/GST number.
* Implementation based on specification available at:
* http://www.ird.govt.nz/resources/9/e/9e408a004e329f16a91bbf8ad6853786/rwt-nrwt-spec-2013+v1.0+.pdf
*
* This module exposes irdnz.isValid method that returns true if IRD/GST number is correct.
*/
(function (exports) {
	var PRIMARY_WEIGHTS = [3, 2, 7, 6, 5, 4, 3, 2],
		SECONDARY_WEIGHTS = [7, 4, 3, 2, 5, 2, 7, 6];

	function isInRange (ird) {
		return 10000000 < ird && ird < 150000000;
	}

	function calculateSum (baseNumber, weights) {
		var irdDigits = baseNumber.toString(10).split(""),
			/* If IRD number is shorter then 8 digits we need to skip first weight. */
			start = weights.length - irdDigits.length,
			sum = 0;

		for (var i = start; i < weights.length; i++) {
			sum += parseInt(irdDigits[i - start], 10) * weights[i];
		};
		return sum;
	}

	function calculateCheckDigit (baseNumber, weights) {
		var sum = calculateSum(baseNumber, weights);
		var rem = sum % 11;
		if(rem !== 0){
			rem = 11 - rem;
		}
		return rem;
	}

	/**
	* Checks if New Zealand's IRD/GST number is correct.
	* 
	* @param {string} ird - New Zealand's IRD or GST number. 
	* @returns {boolean} - true if IRD/GST is valid, false otherwise.
	*/
	exports.isValid = function (ird) {
		/* Make sure IRD is a number. */
		var ird = parseInt(ird, 10);

		if(isInRange(ird)){
			var baseNumber = (ird / 10) >> 0,
				remainder = ird % 10;

			var checkDigit = calculateCheckDigit(baseNumber, PRIMARY_WEIGHTS);
			if(checkDigit === 10){
				checkDigit = calculateCheckDigit(baseNumber, SECONDARY_WEIGHTS);
			}
			return checkDigit === remainder;
		}
		return false;
	};
	
})(typeof exports === 'undefined' ? window['irdnz']={} : exports);