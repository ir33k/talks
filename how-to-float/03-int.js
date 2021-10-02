/* Integer - binary format, max and min value with plot twist

   0b01001101 == 77 == 0x4D         (1 byte == 8 bits)         2  10  16
                                                            ----  --  --
     0   1   0   0   1   1   0   1   Converting from        0000   0   0
                                     binary                 0001   1   1
   128  64  32  16   8   4   2   1                          0010   2   2
     0  64   0   0   8   4   0   1                          0011   3   3
                                77   to decimal             0100   4   4
                                                            0101   5   5
     8   4   2   1   8   4   2   1                          0110   6   6
     0   4   0   0   8   4   0   1                          0111   7   7
                 4               D   to hex                 1000   8   8
                                                            1001   9   9
   Converting from decimal to binary by substracting        1010  10   A
   highest possible power of 2 untill you left with 0       1011  11   B
                                                            1100  12   C
   77 - 64 => 13 - 8 => 5 - 4 => 1 - 1 => 0                 1101  13   D
        ^^         ^        ^        ^                      1110  14   E
   64 32 16  8  4  2  1          (there are other ways)     1111  15   F
    1  0  0  1  1  0  1 == 01001101                                    */

   console.log(0b01001101, 77, 0x4D)
   console.log(77, (77).toString(2), (77).toString(16))

/* 00000000 00000000 00000000 00000000  64 bits gives max possible value
   00000000 00000000 00000000 00000000  of 18446744073709551616        */

   console.log(Number.MAX_SAFE_INTEGER) // => +9007199254740991  (2^53-1)
   console.log(Number.MIN_SAFE_INTEGER) // => -9007199254740991 -(2^53-1)

/* 0000000000011111111111111111111111111111111111111111111111111111
   1000000000011111111111111111111111111111111111111111111111111111    */
