//Ip=> a number which will 4
//Op-> the fibonacci number 0,1,1,2,3 ans is 3

//fib(number) a function which will accept a number and give you the output
//Base condition smallest possible are 0 , 1
//induction fib(n-2)+fib(n-1)

const fib = function (n) {
  if (n <= 1) {
    return n
  }
  return fib(n - 2) + fib(n - 1)
}

console.log(fib(10))
