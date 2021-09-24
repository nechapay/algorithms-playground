// quick sort
const quickSort = (arr, low, high) => {
  if(low < high) {
    let pi = partition(arr, low , high)
    // myConsole(`${arr}`)
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
  }
  return arr
}

const partition = (arr, low, high) => {
  let i = low - 1
  const pivot = arr[high]
  for(let j = low; j < high; j++) {
    if(arr[j] < pivot) {
      i++
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }
  arr[high] = arr[i + 1]
  arr[i + 1] = pivot
  return i + 1
}

// quick sort хохлокод
const q = (arr) => {
  if(arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)

  const left = arr.filter(val => val < arr[mid])
  const right = arr.filter(val => val > arr[mid])
  myConsole(`left ${left} right ${right} mid is ${arr[mid]}`)
  return [...q(left), arr[mid], ...q(right)]
}
