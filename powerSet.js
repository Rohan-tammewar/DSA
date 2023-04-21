//Draw recursion tree to understandclear

const generateSet = function (ip, op, ans) {
  if (ip.length == 0) {
    ans.push([...op])
    return
  }

  let op1 = [...op]
  let op2 = [...op]
  let ip1 = [...ip]
  let ip2 = [...ip]

  op2.push(ip2[0])
  ip1.shift()
  ip2.shift()

  generateSet(ip1, op1, ans)
  generateSet(ip2, op2, ans)

  return ans
}

let nums = [1, 2, 3, 4]
let op = []
let ans = []
console.log(generateSet(nums, op, ans))
