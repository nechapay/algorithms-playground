window.addEventListener('load', function () {
  start()
})

function start() {
  let arr = getArrOfRand(6)
  printArray(arr, '- input arr')
  printArray(selectionSort(arr), `- selection sort`)

  arr = getArrOfRand(6)
  printArray(arr,`- input arr`)
  printArray(selectionSort(arr),`- selection sort`)

  arr = getArrOfRand(6)
  printArray(arr,`- input arr`)
  printArray(bubbleSort(arr),`- bubble sort`)

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(quickSort(arr, 0, arr.length - 1), `- quick sort`)

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(merge(arr), `- merge sort`)

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(heapSort(arr), `- heap sort`)

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(countSort(arr), `- count sort`)

  myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
}




