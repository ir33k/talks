// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

console.log('x y')

start: for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 4; y++) {
    console.log(x, y)
    if (x === 1 && y == 1) {
      break start
    }
  }
}


let i = 0
start: {
  console.log(i)
  break start
  if (i < 5) {
    i++
  }
}
