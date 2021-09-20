/*

   Too long; don't read - some basic rules


   1. Float is not broken.  It's clever and designed for speed.

   2. Avoid float if possible.  Use the smallest possible unit
      like: ns, mm, gr and so one, that work as intigers.

   3. Use float for fast operations (graphics, music, distance).

   4. Use "decimal" for precise calculations (money).  Other
      languages have "decimal" type build in.  We can use library.
      https://www.npmjs.com/package/decimal.js

*/

   // Use "toFixed" method
   console.log(( 0.1 +  0.2).toFixed(1))    // => 0.3
   console.log((10.1 + 10.2).toFixed(2))    // => 20.30

   // It's a trap!  Those are still "broken":
   console.log((10.000000000000001 + 10.000000000000002).toFixed(15))
                                            // => 20.000000000000004
   console.log((10.000000000000001 + 10.000000000000002).toFixed(17))
                                            // => 20.00000000000000355

/*

   "Rules are a poor substitute for actual thought"

*/