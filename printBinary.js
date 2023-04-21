//input 4
// output: 1111 1110 1101 1100 1011 1010
//binary numbers with prefix zeroes less than equal to 1

const generateBinary = function (n, ones, zeroes, op) {
  if (n == 0) {
    console.log(op)
    return
  }
  //condition to print 1

  generateBinary(n - 1, ones + 1, zeroes, op + '1')

  //condition to print 0
  if (zeroes < ones) {
    generateBinary(n - 1, ones, zeroes + 1, op + '0')
  }

  return
}

let n = 4
let ones = 0
let zeroes = 0
let op = ''

generateBinary(n, ones, zeroes, op)
