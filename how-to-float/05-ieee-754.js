/* IEEE 754 https://ew.wikipedia.org/wiki/IEEE_754

   1. Definition                                          (S - Sign bit)

      S Exponent Mantissa 23 (+1)
      - -------- -----------------------
      0 00000000 00000000000000000000000     Equation: S (1+M)*2^(E-127)

   2. Example -23.3 => 1 10000011 01110100110011001100110

      a) 0.3 * 2 == 0.6  | 0    b) 10111.01001100110011001100110
         0.6 * 2 == 1.2  | 1    c) 1.011101001100110011001100110 * 2^4
         0.2 * 2 == 0.4  | 0    d) 4 + 127 == 131 == 10000011
         0.4 * 2 == 0.8  | 0    e) 1 10000011 01110100110011001100110
         0.8 * 2 == 1.6  | 1
         0.6 * 2 repeat  | ...                                         */

      console.log((0.3).toString(2)) // => 0.01001100110011001100110
      console.log(( 23).toString(2)) // => 10111
      console.log((131).toString(2)) // => 10000011

/* 3. Example 1 10000011 01110100110011001100110 => -23.29999923706... */

      console.log(0b10000011 - 127) // => 4
      console.log(0b10111)          // => 23

      /** Get decimal representation of fraction in given base */
      const fun = (f, b=2) =>
        Array.from(f).reduceRight((r,a) => (r+parseInt(a,b))/b,0)

      console.log(fun('0100110011001100110')) // => 0.2999992370605469
      console.log(-1*(23+0.2999992370605469)) // => -23.299999237060547
