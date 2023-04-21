//brute force method

const lastRemaining = function (n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1)
  let count = 1
  while (count < n) {
    for (let i = 0; i < arr.length; i = i + 2) {
      arr[i] = -1
      count++
    }
    arr = arr.filter((ele) => ele > 0)
    arr = reverse(arr)
  }

  return arr.find((element) => {
    return element != -1
  })
}
const reverse = function (arr) {
  if (arr.length == 1) {
    return arr
  }
  let popped = arr.pop()
  reverse(arr)
  insert(arr, popped)

  return arr
}

const insert = function (arr, popped) {
  if (arr.length == 0) {
    arr.push(popped)
    return
  }

  let poppedAgain = arr.pop()
  insert(arr, popped)

  arr.push(poppedAgain)

  return arr
}

console.log(lastRemaining(3))
