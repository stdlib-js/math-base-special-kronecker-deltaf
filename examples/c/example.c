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

#include "stdlib/math/base/special/kronecker_deltaf.h"
#include <stdio.h>

int main() {
	float x[] = { 3.0f, 4.0f, 5.0f, 5.0f };

	float y;
	int i;
	for ( i = 0; i < 4; i += 2 ) {
		y = stdlib_base_kronecker_deltaf( x[ i ], x[ i+1 ] );
		printf( "kronecker_deltaf(%f, %f) = %f\n", x[ i ], x[ i+1 ], y );
	}
}