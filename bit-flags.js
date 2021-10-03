// Set of flags
const FLAG_IS_HOVER    = 0b0001
const FLAG_IS_ACTIVE   = 0b0010
const FLAG_IS_SELECTED = 0b0100
const FLAG_IS_DISABLED = 0b1000

// Init button flags with 2 flags enabled
let buttonFlag = FLAG_IS_HOVER | FLAG_IS_DISABLED

// See how flag looks like
console.log(buttonFlag, buttonFlag.toString(2))

// Check all flags
console.log("Is button hover?"    , Boolean(buttonFlag & FLAG_IS_HOVER   ))
console.log("Is button active?"   , Boolean(buttonFlag & FLAG_IS_ACTIVE  ))
console.log("Is button selected?" , Boolean(buttonFlag & FLAG_IS_SELECTED))
console.log("Is button disabled?" , Boolean(buttonFlag & FLAG_IS_DISABLED))

// Enable another flag
buttonFlag |= FLAG_IS_SELECTED
console.log("Is button selected?", Boolean(buttonFlag & FLAG_IS_SELECTED))

// Disable chosen flag
buttonFlag ^= FLAG_IS_DISABLED
console.log("Is button disabled?", Boolean(buttonFlag & FLAG_IS_DISABLED))

// Act on enabled flag
if ((buttonFlag & FLAG_IS_HOVER) === FLAG_IS_HOVER) {
  console.log("Act on enabled flag")
}
