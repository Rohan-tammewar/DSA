const subString = function (ip, op) {
  if (ip.length == 0) {
    console.log(op)
    return
  }
  let op1 = op
  let op2 = op

  op2 = op2.concat(ip.charAt(0))
  ip = ip.slice(1)

  subString(ip, op1)
  subString(ip, op2)
  return
}

subString('ab', '')
