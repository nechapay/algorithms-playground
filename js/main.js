window.addEventListener('load', function () {
  start()
})

function start() {
  let arr = getArrOfRand(6)
  printArray(arr, '- input arr')
  printArray(selectionSort(arr), `- selection sort`)

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(bubbleSort(arr), `- bubble sort`)

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

  arr = getArrOfRand(6)
  printArray(arr, `- input arr`)
  printArray(radixSort(arr), `- radix sort`)

  arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
  printArray(arr, `- input arr`)
  printArray(bucketSort(arr), `- bucket sort`)

  myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
  f()
}
// closure trick let 1 2 3 var 3 3 3
const f = () => {
  for (var i = 0; i < 3; i++) {
    const log = () => {
      myConsole(`${i}`) // 3 3 3
    }
    setTimeout(log, 100)
  }
}
