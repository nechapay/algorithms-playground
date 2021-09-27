const heapSort = (arr) => {
  let n = arr.length
  buildHeap(arr, n)
  for (let i = n - 1; i >= 0; i--) {
    let tmp = arr[0]
    arr[0] = arr[i]
    arr[i] = tmp
    heapify(arr, i, 0)
  }

  return arr
}

function heapify(arr, n, i) {
  let max = i
  let left = (2 * i) + 1
  let right = (2 * i) + 2

  if(left < n && arr[left] > arr[max]) {
    max = left
  }

  if(right < n && arr[right] > arr[max]) {
    max = right
  }

  if (max !== i) {
    let tmp = arr[i]
    arr[i] = arr[max]
    arr[max] = tmp
    heapify(arr, n, max)
  }
}

function buildHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i)
  }
}
