window.addEventListener('load', function () {
  start()
})

function start() {
  let arr = getArrOfRand(6)
  createDiv('selectionSort', 'selection sort')
  printArray(arr, '#selectionSort')
  printArray(selectionSort(arr), '#selectionSort')

  arr = getArrOfRand(6)
  createDiv('bubbleSort', 'bubble sort')
  printArray(arr, '#bubbleSort')
  printArray(bubbleSort(arr), '#bubbleSort')

  arr = getArrOfRand(6)
  createDiv('bubbleSortRecursive', 'recursive bubble sort')
  printArray(arr, '#bubbleSortRecursive')
  bubbleSortRecursive(arr, arr.length)
  printArray(arr, '#bubbleSortRecursive')

  arr = getArrOfRand(6)
  createDiv('insertionSort', 'insertion sort')
  printArray(arr, '#insertionSort')
  printArray(insertionSort(arr), '#insertionSort')

  arr = getArrOfRand(6)
  createDiv('insertionSortRecursive', 'recursive insertion sort')
  printArray(arr, '#insertionSortRecursive')
  insertionSortRecursive(arr, arr.length)
  printArray(arr, '#insertionSortRecursive')

  arr = getArrOfRand(6)
  createDiv('mergeSort', 'merge sort')
  printArray(arr, '#mergeSort')
  printArray(merge(arr), '#mergeSort')

  arr = getArrOfRand(6)
  createDiv('mergeSortIterative', 'iterative merge sort')
  printArray(arr, '#mergeSortIterative')
  mergeSortIterative(arr)
  printArray(arr, '#mergeSortIterative')

  arr = getArrOfRand(6)
  createDiv('quickSort', 'quick sort')
  printArray(arr, '#quickSort')
  printArray(quickSort(arr, 0, arr.length - 1), '#quickSort')

  arr = getArrOfRand(6)
  createDiv('heapSort', 'heap sort')
  printArray(arr, '#heapSort')
  printArray(heapSort(arr), '#heapSort')

  arr = getArrOfRand(6)
  createDiv('countSort', 'count sort')
  printArray(arr, '#countSort')
  printArray(countSort(arr), '#countSort')

  arr = getArrOfRand(6)
  createDiv('radixSort', 'radix sort')
  printArray(arr, '#radixSort')
  printArray(radixSort(arr), '#radixSort')

  arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
  createDiv('bucketSort', 'bucket sort')
  printArray(arr, '#bucketSort')
  printArray(bucketSort(arr), '#bucketSort')

  arr = getArrOfRand(6)
  createDiv('shellSort', 'shell sort')
  printArray(arr, '#shellSort')
  printArray(shellSort(arr), '#shellSort')

  arr = getArrOfRand(6)
  createDiv('timSort', 'tim sort')
  printArray(arr, '#timSort')
  const timSort = new TimSort()
  // let start = Date.now()
  arr = timSort.sort(arr)
  // let end = Date.now()
  printArray(arr, '#timSort')
  // appendTime('#timSort', end - start)

  arr = getArrOfRand(6)
  createDiv('combSort', 'comb sort')
  printArray(arr, '#combSort')
  const combSort = new CombSort()
  arr = combSort.sort(arr)
  printArray(arr, '#combSort')

  arr = getArrOfRand(6)
  createDiv('pigeonholeSort', 'pigeonhole sort')
  printArray(arr, '#pigeonholeSort')
  arr = pigeonholeSort(arr)
  printArray(arr, '#pigeonholeSort')

  arr = getArrOfRand(6)
  createDiv('cycleSort', 'cycle sort')
  printArray(arr, '#cycleSort')
  arr = cycleSort(arr)
  printArray(arr, '#cycleSort')

  arr = getArrOfRand(6)
  createDiv('cocktailSort', 'cocktail sort')
  printArray(arr, '#cocktailSort')
  arr = cocktailSort(arr)
  printArray(arr, '#cocktailSort')

  arr = getArrOfRand(6)
  createDiv('strandSort', 'strand sort')
  printArray(arr, '#strandSort')
  const strandSort = new StrandSort([])
  strandSort.sort(arr)
  printArray(strandSort.sorted, '#strandSort')

  arr = getArrOfRand(8)
  createDiv('bitonicSort', 'bitonic sort')
  printArray(arr, '#bitonicSort')
  const bitonicSort = new BitonicSort()
  bitonicSort.sort(arr, 1)
  printArray(arr, '#bitonicSort')

  arr = getArrOfRand(5)
  createDiv('pancakeSort', 'pancake sort')
  printArray(arr, '#pancakeSort')
  const pancakeSort = new PancakeSort()
  pancakeSort.sort(arr)
  printArray(arr, '#pancakeSort')

  arr = getArrOfRand(6)
  createDiv('binaryInsertionSort', 'binary insertion sort')
  printArray(arr, '#binaryInsertionSort')
  const binaryInsertionSort = new BinaryInsertionSort()
  binaryInsertionSort.sort(arr)
  printArray(arr, '#binaryInsertionSort')

  arr = getArrOfRand(6)
  createDiv('permutationSort', 'permutation sort')
  printArray(arr, '#permutationSort')
  const permutationSort = new PermutationSort()
  permutationSort.sort(arr)
  printArray(arr, '#permutationSort')

  arr = getArrOfRand(6)
  createDiv('gnomeSort', 'gnome sort')
  printArray(arr, '#gnomeSort')
  arr = gnomeSort(arr)
  printArray(arr, '#gnomeSort')

  arr = getArrOfRand(6)
  createDiv('sleepSort', 'sleep sort')
  printArray(arr, '#sleepSort')
  sleepSort(arr, (a) => {
    printArray(a, '#sleepSort')
  })

  arr = getArrOfRand(6)
  createDiv('stoogeSort', 'stooge sort')
  printArray(arr, '#stoogeSort')
  stoogeSort(arr, 0, arr.length - 1)
  printArray(arr, '#stoogeSort')

  // myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
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
