//Draw a recursion tree and write the code

const generateString = function (ip, op) {
  if (ip.length == 0) {
    console.log(op)
    return
  }

  let op1 = op
  let op2 = op

  op1 = op.concat(ip.charAt(0))
  op2 = op.concat(' ').concat(ip.charAt(0))

  ip = ip.slice(1)

  generateString(ip, op1)
  generateString(ip, op2)
  return
}

let ip = 'ABC'
let op = ''

op = op.concat(ip.charAt(0))
ip = ip.slice(1)
generateString(ip, op)
