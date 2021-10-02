/* Let's add 0.1 and 0.2 by hand

          s e        m
   0.1 == 0 01111011 10011001100110011001101   e => 123 - 127 == -4
   0.2 == 0 01111100 10011001100110011001101   e => 124 - 127 == -3

   Match exponents, smaller to bigger and align point

   1.10011001100110011001101 x 2^-4  <-- smaller exponent
   1.10011001100110011001101 x 2^-3  <-- bigger exponent

     0.110011001100110011001101 x 2^-3
   + 1.100110011001100110011010 x 2^-3
   ----------------------------
    10.011001100110011001100111 x 2^-3

    1.0011001100110011001100111 x 2^-2

   e = -2 + 127 == 125 == 01111101

   00111110100110011001100110011001 == 0.299999982119                  */
      
   console.log((0.299999982119).toFixed(1))         // => 0.3

   const buffer  = new ArrayBuffer(4*4)               // 32 bits
   const int32   = new Int32Array(buffer)
   const float32 = new Float32Array(buffer)
   
   int32[0] = 0b00111110100110011001100110011001
   int32[1] = 0b01111111100000000000000000000001
   int32[2] = 0b01111111110000000000000000000001
   int32[3] = 0b01111111100000000111111110000001

   console.log(float32)                          // => 0.299999982119