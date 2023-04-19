const caseChange = function (ip, op) {
  if (ip.length == 0) {
    console.log(op)
    return
  }

  let op1 = op
  let op2 = op

  op1 = op1 + ip.charAt(0)
  op2 = op2 + ip.charAt(0).toUpperCase()
  ip = ip.slice(1)

  caseChange(ip, op1)
  caseChange(ip, op2)

  return
}

caseChange('abc', '')
