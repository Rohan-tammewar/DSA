//input will be the number of plates
//Task to put all the plates from source to destination in ascending order
//3 towers
//for smaller input we will move n-1 plates from s to d but since it should be in ascending order(top to bottom) we have to keep it in helper tower

//Hypothesis function that accepts the tower and number of plates and provide you the output with the steps to be followed
const solveTOH = function (plates, source, helper, dest) {
  //base condition will be a single plate to be moved from s to d
  if (plates === 1) {
    console.log(`Move plate ${plates} from tower ${source} -> tower ${dest}`)
    return
  }
  //As a induction step first we have to move the nth plate to the destination from the source then, move n-1 plates from helper to destination
  solveTOH(plates - 1, source, dest, helper)
  console.log(`Move plate ${plates} from tower ${source} -> tower ${dest}`)
  solveTOH(plates - 1, helper, source, dest)
  return
}

let source = 1
let helper = 2
let dest = 3
solveTOH(4, source, helper, dest)
