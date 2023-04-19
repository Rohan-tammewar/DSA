const isLetter = function (str) {
  // function to determine if the character is alphabet or not
  return str.match(/[a-z]/i)
}

const solve = function (ip, op) {
  if (ip.length == 0) {
    console.log(op)
    return
  }

  if (!isLetter(ip.charAt(0))) {
    let op1 = op

    op1 = op1 + ip.charAt(0)
    ip = ip.slice(1)

    solve(ip, op1)
    return
  } else {
    let op1 = op
    let op2 = op

    op1 = op1 + ip.charAt(0).toLowerCase()
    op2 = op2 + ip.charAt(0).toUpperCase()
    ip = ip.slice(1)

    solve(ip, op1)
    solve(ip, op2)
    return
  }
}

let ip = 'a1B2c'
let op = ''
solve(ip, op)
