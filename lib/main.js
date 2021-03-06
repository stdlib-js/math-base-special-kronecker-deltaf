/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnanf = require( '@stdlib/math-base-assert-is-nanf' );


// MAIN //

/**
* Evaluates the Kronecker delta (single-precision).
*
* @param {number} i - input value
* @param {number} j - input value
* @returns {number} function value
*
* @example
* var v = kroneckerDeltaf( 3.14, 3.14 );
* // returns 1.0
*
* @example
* var v = kroneckerDeltaf( 3.14, 0.0 );
* // returns 0.0
*
* @example
* var v = kroneckerDeltaf( NaN, 3.14 );
* // returns NaN
*
* @example
* var v = kroneckerDeltaf( 3.14, NaN );
* // returns NaN
*
* @example
* var v = kroneckerDeltaf( NaN, NaN );
* // returns NaN
*/
function kroneckerDeltaf( i, j ) {
	if ( isnanf( i ) || isnanf( j ) ) {
		return NaN;
	}
	if ( i === j ) {
		return 1.0;
	}
	return 0.0;
}


// EXPORTS //

module.exports = kroneckerDeltaf;
