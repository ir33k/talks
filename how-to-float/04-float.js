/* Float - what floating point in numbers means and why it's useful

   1. Fixed point number is not flexible.  Point in fixed position of
      binary number limits integer and fraction portion of number even
      when we don't need them.

      integer  fraction
      -------- --------                 a) small maximum numbers
      00000000.00000000    0.000        b) poor precission
      11111111.00000000  255.000        c) wasted bits
      00000000.11111111    0.255        d) how to represent infinity?

   2. By moving point we can represent more numbers and be more precise
      while using less bits.                                           */

      // Numeric literal with exponent
      console.log(1_234_567.89e0)       // => 1234567.89
      console.log(1_234_567.89e-1)      // => 123456.789
      console.log(1_234_567.89e-3)      // => 1234.56789
      console.log(1_234_567.89e-8)      // => 0.0123456789
      console.log(1_234_567.89e1)       // => 12345678.9
      console.log(1_234_567.89e5)       // => 123456789000

/* 3. Values like NaN and infinity are also represent using float      */

      console.log(Number.NaN)
      console.log(Number.POSITIVE_INFINITY)
      console.log(Number.NEGATIVE_INFINITY)

/* 4. And yes, we have negative 0 in float.  It will make sanse once
      we get familiar with bits representations of float.              */

      console.log(-0)
