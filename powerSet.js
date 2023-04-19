//Thought process
// let say input is [1,2,3] what we will do is consider a recursion function which will be called for [1,2] and consider the another with [1,2,3] then [1] and [1,2] and so on

const generateSet = function (nums, idx, op, ans) {
  if (idx == nums.length) {
    ans.push([...op])
    return
  }

  op.push(nums[idx])
  generateSet(nums, idx + 1, op, ans)
  op.splice(op.length - 1)
  //   console.log(op)
  generateSet(nums, idx + 1, op, ans)

  return ans
}

let nums = [1, 2, 3]
let op = []
let idx = 0
let ans = []
console.log(generateSet(nums, idx, op, ans))
