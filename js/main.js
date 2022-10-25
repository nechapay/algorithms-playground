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

  arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]
  createDiv('tagSort', 'tag sort')
  printArray(arr, '#tagSort')
  arr = tagSort(arr)
  printArray(arr, '#tagSort')

  arr = getArrOfRand(6)
  createDiv('treeSort', 'tree sort')
  printArray(arr, '#treeSort')
  printArray(treeSort(arr), '#treeSort')

  arr = getArrOfRand(6)
  createDiv('cartesianTreeSort', 'cartesianTree sort')
  printArray(arr, '#cartesianTreeSort')
  printArray(cartesianTreeSort(arr), '#cartesianTreeSort')

  arr = getArrOfRand(6)
  createDiv('oddEvenSort', 'oddEven sort')
  printArray(arr, '#oddEvenSort')
  printArray(oddEvenSort(arr), '#oddEvenSort')

  arr = getArrOfRand(6)
  createDiv('quickSortSLList', 'quickSortSLList')
  printArray(arr, '#quickSortSLList')
  printArray(quickSortSLList(arr), '#quickSortSLList')

  // myConsole(`largest even ${findEven('284918227595347128185772596567355423933679973674289434574127522843135379266')}`)
  // f()
  // arr = [
  //   142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191, 43, 89, 107, 41, 143, 65, 49, 47, 6,
  //   91, 130, 171, 151, 7, 102, 194, 149, 30, 24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119,
  //   83, 130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71, 30, 178, 174, 98, 113
  // ]
  // console.log(sumArr(arr, arr.length, 665))
  // arr = [1, 2, 3, 5]
  // console.log(missingNumber(arr, arr.length + 1))
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

const sumArr = (arr, n, s) => {
  let sum
  let res = []
  for (let i = 0; i < n; i++) {
    sum = arr[i]
    for (let j = i + 1; j <= n; j++) {
      if (sum === s) {
        res.push(i + 1)
        res.push(j)
        return res
      }

      if (sum > s || j === n) break

      sum += arr[j]
    }
  }
  return [-1]
}

const missingNumber = (arr, n) => {
  let sum = 0
  sum = arr.reduce((i, j) => i + j)
  let formula = parseInt((n * (n + 1)) / 2)
  return formula - sum
}
