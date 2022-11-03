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
  // console.log(sumArr(arr, arr.length, 6))
  // console.log(missingNumber(arr, arr.length + 1))
  let start = Date.now()
  searchOne(
    '284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266'
  )
  let end = Date.now()
  console.log('searchOne', end - start)
  start = Date.now()
  searchTwo(
    '284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266284918227595347128185772596567355423933679973674289434574127522843135379266'
  )
  end = Date.now()
  console.log('searchTwo', end - start)
  forTest()
  longestPalindrome('aaaabbbaa')
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
  for (let i = 0; i < n; i++) {
    sum = arr[i]
    for (let j = i + 1; j <= n; j++) {
      if (sum === s) {
        return [i + 1, j]
      }

      if (sum > s || j === n) break

      sum += arr[j]
    }
  }
  return [-1]
}

const missingNumber = (arr, n) => {
  return parseInt((n * (n + 1)) / 2) - arr.reduce((i, j) => i + j)
}

const searchOne = (str) => {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0
    }
    obj[str[i]]++
  }
  let cnt = 0
  let ans = ''
  for (let el of Object.keys(obj)) {
    if (obj[el] > cnt) {
      cnt = obj[el]
      ans = el
    }
  }
  console.log(ans, cnt)
}

const searchTwo = (str) => {
  let cnt = 0
  let ans = ''
  for (let i = 0; i < str.length; i++) {
    let newCnt = 0
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[i]) {
        newCnt++
      }
    }
    if (newCnt > cnt) {
      cnt = newCnt
      ans = str[i]
    }
  }
  console.log(ans, cnt)
}

const forTest = () => {
  for (let i = 0; i < 10; ++i) {
    console.log(i)
  }
  let i = 0
  let j = 0
  while (i < 10) {
    console.log(i++, ++j)
  }
}

const longestPalindrome = (str) => {
  let s = str.split('')
  let s2 = Array.from({ length: s.length * 2 + 1 }, (i) => (i = '#'))

  for (let i = 0; i < s.length; i++) {
    s2[i * 2 + 1] = s[i]
  }
  let p = Array.from({ length: s2.length }, (i) => (i = 0))
  let r, c, index, iMir
  iMir = index = r = c = 0
  let maxLen = 0

  for (let i = 0; i < s2.length; i++) {
    iMir = 2 * c - i
    p[i] = r > i ? Math.min(p[iMir], r - i) : 0

    while (i > p[i] && i + p[i] + 1 < s2.length && s2[i - 1 - p[i]] === s2[i + 1 + p[i]]) p[i]++

    if (p[i] + i > r) {
      c = i
      r = i + p[i]
    }
    if (maxLen < p[i]) {
      maxLen = p[i]
      index = i
    }
  }
  console.log(
    s2
      .join('')
      .substring(index - maxLen, index + maxLen)
      .split('#')
      .join('')
  )
}
