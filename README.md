<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Kronecker Delta

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [Kronecker delta][kronecker-delta] (single-precision).

<section class="intro">

The [Kronecker delta][kronecker-delta] is defined as

<!-- <equation class="equation" label="eq:kronecker_delta" align="center" raw="\delta_{ij} = \begin{cases} 1 & \textrm{if}\ i = j \\ 0 & \textrm{if}\ i \neq j\end{cases}" alt="Kronecker delta."> -->

<div class="equation" align="center" data-raw-text="\delta_{ij} = \begin{cases} 1 &amp; \textrm{if}\ i = j \\ 0 &amp; \textrm{if}\ i \neq j\end{cases}" data-equation="eq:kronecker_delta">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b245da8d5397f5cf6a71ec8a0147cf47d876eeb7/lib/node_modules/@stdlib/math/base/special/kronecker-deltaf/docs/img/equation_kronecker_delta.svg" alt="Kronecker delta.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kronecker-deltaf
```

</section>

<section class="usage">

## Usage

```javascript
var kroneckerDeltaf = require( '@stdlib/math-base-special-kronecker-deltaf' );
```

#### kroneckerDeltaf( i, j )

Evaluates the [Kronecker delta][kronecker-delta] (single-precision).

```javascript
var v = kroneckerDeltaf( 3.14, 3.14 );
// returns 1.0

v = kroneckerDeltaf( 3.14, 0.0 );
// returns 0.0

v = kroneckerDeltaf( NaN, 3.14 );
// returns NaN

v = kroneckerDeltaf( 3.14, NaN );
// returns NaN

v = kroneckerDeltaf( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );
var kroneckerDeltaf = require( '@stdlib/math-base-special-kronecker-deltaf' );

var x = linspace( -1.0, 1.0, 101 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( 'kronecker(%d,%d) = %d', x[ i ], 0.0, kroneckerDeltaf( x[ i ], 0.0 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kronecker-deltaf
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/kronecker_deltaf.h
```

#### stdlib_base_kronecker_deltaf( i, j )

Evaluates the Kronecker delta (single-precision).

```c
float v = stdlib_base_kronecker_deltaf( 3.0f, 3.0f );
// returns 1.0f
```

The function accepts the following arguments:

-   **i**: `[in] float` input value.
-   **j**: `[in] float` input value.

```c
float stdlib_base_kronecker_delta( const float i, const float j );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/kronecker_deltaf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.0f, 4.0f, 5.0f, 5.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_kronecker_deltaf( x[ i ], x[ i+1 ] );
        printf( "kronecker_delta(%f, %f) = %f\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/kronecker-delta`][@stdlib/math/base/special/kronecker-delta]</span><span class="delimiter">: </span><span class="description">evaluate the Kronecker delta.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kronecker-deltaf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kronecker-deltaf

[test-image]: https://github.com/stdlib-js/math-base-special-kronecker-deltaf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-kronecker-deltaf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kronecker-deltaf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kronecker-deltaf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kronecker-deltaf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kronecker-deltaf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-kronecker-deltaf/main/LICENSE

[kronecker-delta]: https://en.wikipedia.org/wiki/Kronecker_delta

<!-- <related-links> -->

[@stdlib/math/base/special/kronecker-delta]: https://github.com/stdlib-js/math-base-special-kronecker-delta

<!-- </related-links> -->

</section>

<!-- /.links -->
