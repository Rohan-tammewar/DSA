//https://leetcode.com/problems/k-th-symbol-in-grammar/description/

function kthGrammar(n, k) {
  if (n === 1 && k === 1) {
    return 0
  }

  let mid = Math.pow(2, n - 1) / 2

  if (k <= mid) {
    return kthGrammar(n - 1, k)
  } else {
    return (1 + kthGrammar(n - 1, k - mid)) % 2
  }
}

console.log(kthGrammar(1000, 8))
