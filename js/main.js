window.addEventListener('load', function () {
  start()
})

function start() {
  let arr = getArrOfRand(6)
  createDiv('selectionSort')
  printArray(arr, '- input arr', '#selectionSort')
  printArray(selectionSort(arr), `- selection sort`, '#selectionSort')

  arr = getArrOfRand(6)
  createDiv('bubbleSort')
  printArray(arr, `- input arr`, '#bubbleSort')
  printArray(bubbleSort(arr), `- bubble sort`, '#bubbleSort')

  arr = getArrOfRand(6)
  createDiv('quickSort')
  printArray(arr, `- input arr`, '#quickSort')
  printArray(quickSort(arr, 0, arr.length - 1), `- quick sort`, '#quickSort')

  arr = getArrOfRand(6)
  createDiv('mergeSort')
  printArray(arr, `- input arr`, '#mergeSort')
  printArray(merge(arr), `- merge sort`, '#mergeSort')

  arr = getArrOfRand(6)
  createDiv('heapSort')
  printArray(arr, `- input arr`, '#heapSort')
  printArray(heapSort(arr), `- heap sort`, '#heapSort')

  arr = getArrOfRand(6)
  createDiv('countSort')
  printArray(arr, `- input arr`, '#countSort')
  printArray(countSort(arr), `- count sort`, '#countSort')

  arr = getArrOfRand(6)
  createDiv('radixSort')
  printArray(arr, `- input arr`, '#radixSort')
  printArray(radixSort(arr), `- radix sort`, '#radixSort')

  arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
  createDiv('bucketSort')
  printArray(arr, `- input arr`, '#bucketSort')
  printArray(bucketSort(arr), `- bucket sort`, '#bucketSort')

  arr = getArrOfRand(6)
  createDiv('shellSort')
  printArray(arr, `- input arr`, '#shellSort')
  printArray(shellSort(arr), `- shell sort`, '#shellSort')

  myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
  // f()
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
