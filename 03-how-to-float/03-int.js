/* Integer - binary format, max and min value with plot twist

   01001101(2) == 77(10) == 4D(16)                           2  10  16
                                                          ----  --  --
   Converting from binary to decimal and hex              0000   0   0
                                                          0001   1   1
     0   1   0   0   1   1   0   1   binary               0010   2   2
                                                          0011   3   3
   128  64  32  16   8   4   2   1                        0100   4   4
     0  64   0   0   8   4   0   1                        0101   5   5
                                77   decimal              0110   6   6
                                                          0111   7   7
     8   4   2   1   8   4   2   1                        1000   8   8
     0   4   0   0   8   4   0   1                        1001   9   9
                 4               D   hex                  1010  10   A
                                                          1011  11   B
   Converting from decimal to binary by substracting      1100  12   C
   highest possible power of 2 untill you left with 0     1101  13   D
                                                          1110  14   E
   77 - 64 => 13 - 8 => 5 - 4 => 1 - 1 => 0               1111  15   F
        ^^         ^        ^        ^
   64 32 16 8 4 2 1
    1  0  0 1 1 0 1 == 01001101                                      */

   console.log(Number.MAX_SAFE_INTEGER)    // => +9007199254740991
   console.log(Number.MIN_SAFE_INTEGER)    // => -9007199254740991

/* 00000000 00000000 00000000 00000000  64 bits max gives possible
   00000000 00000000 00000000 00000000  value of 18446744073709551616

   0000000000011111111111111111111111111111111111111111111111111111
   1000000000011111111111111111111111111111111111111111111111111111  */
