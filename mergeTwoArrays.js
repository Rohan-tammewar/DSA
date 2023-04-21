const merge = function (arr1, arr2, arr) {
  if (arr1.length == 0) {
    return arr.push(...arr2)
  }
  if (arr2.length == 0) {
    return arr.push(...arr1)
  }

  let poppedarr
  if (arr1.length >= arr2.length) {
    poppedarr = arr1.pop()
  } else {
    poppedarr = arr2.pop()
  }

  merge(arr1, arr2, arr)
  insert(arr, poppedarr)

  return arr
}

const insert = function (arr, poppedarr) {
  if (arr.length == 0 || arr[arr.length - 1] <= poppedarr) {
    return arr.push(poppedarr)
  }

  let poppedFromInsert = arr.pop()

  insert(arr, poppedarr)
  arr.push(poppedFromInsert)
}

let arr1 = [1, 2, 4, 4, 5, 6, 7]
let arr2 = [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
let arr = []
console.log(merge(arr1, arr2, arr))
