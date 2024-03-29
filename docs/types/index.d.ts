/*
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

// TypeScript Version: 4.1

/**
* Evaluates the Kronecker delta (single-precision).
*
* ## Notes
*
* -   If `i == j`, the function returns `1`; otherwise, the function returns zero.
*
* @param i - input value
* @param j - input value
* @returns function value
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
declare function kroneckerDeltaf( i: number, j: number ): number;


// EXPORTS //

export = kroneckerDeltaf;
