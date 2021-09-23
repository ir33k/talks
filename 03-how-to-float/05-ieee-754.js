/* IEEE 754 https://ew.wikipedia.org/wiki/IEEE_754

   JS uses double-precision floating-point format (FP64 or float64) that
   is like 64 bit version of 32bit original IEEE 754 design.

   https://en.wikipedia.org/wiki/Double-precision_floating-point_format

   1. Definition                                          (S* - Sign bit)

      S* Exponent  Mantissa
      -  --------  -----------------------
      0  00000000  00000000000000000000000    Equation: S (1+M)*2^(E-127)

   2. Converting example  -23.3 => 1 10000011 01110100110011001100110

      a) 0.3 * 2 == 0.6  | 0    b) 10111.01001100110011001100110
         0.6 * 2 == 1.2  | 1    c) 1.011101001100110011001100110 * 2^4
         0.2 * 2 == 0.4  | 0    d) 4 + 127 == 131 == 10000011
         0.4 * 2 == 0.8  | 0    e) 1 10000011 01110100110011001100110
         0.8 * 2 == 1.6  | 1
         0.6 * 2 repeat  | ...                                         */
      
      console.log((0.3).toString(2)) // => 0.01001100110011001100110
      console.log(( 23).toString(2)) // => 10111
      console.log((131).toString(2)) // => 10000011

/* 3. Special values

      0 00000000 00000000000000000000000 ==  0
      1 00000000 00000000000000000000000 == -0
      0 11111111 00000000000000000000000 ==  infinity ==  1/0
      1 11111111 00000000000000000000000 == -infinity == -1/0
      0 11111111 00101110101010010101111 ==  NaN      ==  0/0          */
