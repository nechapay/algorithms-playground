// generates array from 1 to val
const getArr = (val) => {
  let arr = []
  for (let i = 0; i < val; i++) {
    arr.push(i + 1)
  }
  return arr
}
// generates array of random int
const getArrOfRand = (val) => {
  let arr = []
  for (let i = 0; i < val; i++) {
    arr.push(getRandomInt(0, 100))
  }
  myConsole(arr)
  return arr
}
// returns random int
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
