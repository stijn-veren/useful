// find the maximum odd number

const arr = ['1', '3', '2', '4']

const res = arr
  .map((el) => parseInt(el))
  .filter((num) => num % 2)
  .reduce((max, value) => Math.max(max, value), 0)

console.log(res) // 3

// find the maximum number in an array of numbers

const arr = [1, 2, 3]

const res = Math.max.apply(Math, arr) // old
const res = Math.max(...arr) // new

console.log(res) // 3
