function print(n) {
  if (n === 1) {
    console.log(1)
    return
  }
  print(n - 1) // hypothesis
  console.log(n)
}

// print(7)

const printReverse = function (n) {
  if (n === 1) {
    console.log(1)
    return
  }
  console.log(n)
  printReverse(n - 1)
}

// printReverse(7)

//fibonacci of n
// fib series 0,1,1,2,3,5,8..
//fib(4) will be 3
//Hypothesis will be n-1 + n-1
//Since hyptthesis is sufficient induction is nott needed
//base conditon will be 0 but, here we can see the value can be 0 and 1 so base condition is n<=1 i.e 0 and 1 which returns 0 and 1 in simple terms n

const fib = function (n) {
  if (n <= 1) {
    return n
  }

  return fib(n - 2) + fib(n - 1)
}
console.log(fib(9))
