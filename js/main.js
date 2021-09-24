window.addEventListener('load', function () {
  start()
})
function start () {
  let arr = getArrOfRand(50)
  myConsole(`quick sort: ${quickSort(arr, 0, arr.length - 1 )}`)
  myConsole(`merge sort: ${merge(arr)}`)
}


