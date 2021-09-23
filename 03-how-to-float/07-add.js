/* Let's add 0.1 and 0.2 by hand

   a) 0.1 == 00111101110011001100110011001101

      s = 0
      e = 01111011 == 123 - 127 == -4
      m = (1.)10011001100110011001101

   b) 0.2 == 00111110010011001100110011001101

      s = 0
      e = 01111100 == 124 - 127 = -3
      m = (1.)10011001100110011001101

   c) Match exponents, smaller to bigger and align point

      1.10011001100110011001101 x 2^-4  <-- smaller exponent
      1.10011001100110011001101 x 2^-3  <-- bigger exponent

        0.110011001100110011001101 x 2^-3
      + 1.100110011001100110011010 x 2^-3
      ----------------------------
       10.011001100110011001100111 x 2^-3

       1.0011001100110011001100111 x 2^-2

      s = 0
      e = -2 + 127 == 125 == 01111101
      m = 1.00110011001100110011001 /11

      00111110100110011001100110011001 == 0.299999982119               */
      
   console.log((0.299999982119).toFixed(1))    // => 0.3