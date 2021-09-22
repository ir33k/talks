/* HOW TO FLOAT - how floating point numbers work

   0.1 + 0.2 => 0.30000000000000004

   1. Laugh at JS, but the result is correct.

   2. It's not just JS.  https://0.30000000000000004.com

   3. IEEE 754 standard.  https://ew.wikipedia.org/wiki/IEEE_754     */


   // What's the problem?

   console.log(    0.1 +     0.2)    // =>     0.30000000000000004
   console.log(    1.1 +     1.2)    // =>     2.3
   console.log(   10.1 +    10.2)    // =>    20.299999999999997
   console.log(  100.1 +   100.2)    // =>   200.3
   console.log( 1000.1 +  1000.2)    // =>  2000.3000000000002
   console.log(10000.1 + 10000.2)    // => 20000.300000000003
                                     //          `- - - - - floating

   // Second example from above is particularly disturbing.
   // But wait until you see number with 17 digits.

   console.log(1000000000000000.1 + 1000000000000000.2)     // any
   console.log(10000000000000.001 + 10000000000000.002)     // correct
   console.log(10000000000.000001 + 10000000000.000002)     // results
   console.log(10.000000000000001 + 10.000000000000002)     // ?
