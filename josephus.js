//In the given problem we have 2 numbers as n, k input where n is total number of people in circle and k is the count after which tthe person is killed
//input :40 , 7
//output: 24
//explanation after kiling the person at the 7th index and after that the next 7th person in a circle at the end we have a person left

//hypothesis: a function solve which will give you the number of person on which he is standing
//base condition: length of arr = 1
//induction: no need of induction

const solve = function (arr, index, k) {
  if (arr.length === 1) {
    console.log(`Number ${arr[0]} will survive`)
    return
  }

  index = (index + k) % arr.length
  arr.splice(index, 1)

  solve(arr, index, k)
}

let n = 452
let k = 7
k = k - 1 // since our index starts from 0
let index = 0 //this will keep track of the person next to be killed
let arr = Array.from({ length: n }, (_, i) => i + 1)

solve(arr, index, k)
