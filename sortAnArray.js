// ip -> 1 5 0 2
// op -> 0 1 2 5

// For sorting an array we will be using recursion
// since we do not have any decisions to make we will be using IBH method
// Hypothesis will be a function which accepts an array as input and provides a sorted array
// Induction will be to insert the element back to the array when we pass a smaller input array. We can achieve it using another recursion function or a for loop

const sort = function (arr) {
  if (arr.length == 1) {
    return arr
  }
  let poppedFromSort = arr.pop()

  sort(arr)
  insert(arr, poppedFromSort)
  return arr
}

// Hypothesis: A insert function which will accept arr and the element to be inserted in the Array

const insert = function (arr, poppedFromSort) {
  // Base Condtion: the smallest possible conditon can be the arr is of zero size that maeans we have nothing to compare with or the element to be inserted is bigger than  the last
  if (arr.length === 0 || arr[arr.length - 1] <= poppedFromSort) {
    arr.push(poppedFromSort)
    return
  }
  let poppedFromInsert = arr.pop()

  insert(arr, poppedFromSort)
  //   Induction: while making the input smaller i.e we pop the element from the array which has to be put backed into the array
  arr.push(poppedFromInsert)
  return arr
}

let arr = [1, 2, 0, 5]
console.log(sort(arr))
