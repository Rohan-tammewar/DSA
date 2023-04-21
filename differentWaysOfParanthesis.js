const solve = function (ip, arr) {
  let res = []
  for (let i = 1; i < ip.length; ++i) {
    if (ip.charAt(i) == '+' || ip.charAt(i) == '-' || ip.charAt(i) == '*') {
      let ip1 = ip.slice(0, i)
      let ip2 = ip.slice(i + 1)

      let arr1 = solve(ip1, arr)
      let arr2 = solve(ip2, arr)

      for (let j = 0; j < arr1.length; ++j) {
        for (let k = 0; k < arr2.length; ++k) {
          if (ip.charAt(i) == '-') {
            res.push(arr1[j] - arr2[k])
          }
          if (ip.charAt(i) == '+') {
            res.push(arr1[j] + arr2[k])
          }
          if (ip.charAt(i) == '*') {
            res.push(arr1[j] * arr2[k])
          }
        }
      }
    }
  }
  if (Number(ip)) {
    res.push(Number(ip))
  }
  return res
}

let ip = '2*3-4*5'
let op = ''
let arr = []
console.log(solve(ip, arr))

// function a(n, k) {
//   k.push(n)
//   return k
// }
// let k = []
// let arr = a(5, k)

// console.log(arr)
