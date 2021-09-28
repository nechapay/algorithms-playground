window.addEventListener('load', function () {
  start()
})

function start() {
  let arr = getArrOfRand(6)
  myConsole(`quick sort: ${quickSort(arr, 0, arr.length - 1)}`)
  arr = getArrOfRand(6)
  myConsole(`merge sort: ${merge(arr)}`)
  arr = getArrOfRand(6)
  myConsole(`heap sort: ${heapSort(arr)}`)
  myConsole(`count sort ${countSort([1, 4, 1, 2])}`)
  myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
}




