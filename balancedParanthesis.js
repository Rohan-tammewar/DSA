const generateBalancedParanthesis = function (
  openingBrackets,
  closingBrackets,
  op,
  arr,
) {
  //base condition
  if (openingBrackets === 0 && closingBrackets === 0) {
    arr.push(op)
    return
  }

  //I have open brackets
  if (openingBrackets !== 0) {
    let op1 = op

    op1 = op1 + '('

    generateBalancedParanthesis(openingBrackets - 1, closingBrackets, op1, arr)
  }
  if (closingBrackets > openingBrackets) {
    let op2 = op

    op2 = op2 + ')'

    generateBalancedParanthesis(openingBrackets, closingBrackets - 1, op2, arr)
  }
  return arr
}

let ip = 3
let openingBrackets = ip
let closingBrackets = ip
let op = ''
let arr = []

console.log(
  generateBalancedParanthesis(openingBrackets, closingBrackets, op, arr),
)
