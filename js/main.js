window.addEventListener('load', function () {
  start()
})
function start () {
  let arr = getArrOfRand(6)
  myConsole(`quick sort: ${quickSort(arr, 0, arr.length - 1 )}`)
  arr = getArrOfRand(6)
  myConsole(`merge sort: ${merge(arr)}`)
  arr = getArrOfRand(6)
  myConsole(`heap sort: ${heapSort(arr)}`)
}


