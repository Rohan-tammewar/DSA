const kidsWithCandies = function (candies, extraCandies) {
  let maxNoOfCandies = candies.reduce((candy, max) => {
    if (candy >= max) {
      max = candy
    }
    return max
  }, 0)
  let arr = []
  for (let i = 0; i <= candies.length - 1; ++i) {
    if (candies[i] + extraCandies >= maxNoOfCandies) {
      arr.push(true)
    } else {
      arr.push(false)
    }
  }
  return arr
}
let arr = [2, 3, 5, 1, 3]
console.log(kidsWithCandies(arr, 2))
