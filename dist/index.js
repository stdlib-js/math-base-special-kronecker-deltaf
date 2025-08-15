/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the Kronecker delta (single-precision).
*
* @module @stdlib/math-base-special-kronecker-deltaf
*
* @example
* var kroneckerDeltaf = require( '@stdlib/math-base-special-kronecker-deltaf' );
*
* var v = kroneckerDeltaf( 3.14, 3.14 );
* // returns 1.0
*
* v = kroneckerDeltaf( 3.14, 0.0 );
* // returns 0.0
*
* v = kroneckerDeltaf( NaN, 3.14 );
* // returns NaN
*
* v = kroneckerDeltaf( 3.14, NaN );
* // returns NaN
*
* v = kroneckerDeltaf( NaN, NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
