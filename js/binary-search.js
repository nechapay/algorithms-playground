// binary search
const bin = (initialArray, val) => {
  let arr = [...initialArray]
  let step = 1
  let left = 0
  let right = arr.length - 1
  if (val > arr[right]) {
    return `404`
  }
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    myConsole(`${step}: mid is ${mid} at ${arr[mid]}`)
    if (arr[mid] === val) {
      return `${val} in position ${mid} of array: [${arr}]`
    }
    if (arr[mid] < val) {
      left = mid + 1
    } else {
      right = mid - 1
    }
    step++
  }
  return `404`
}

// нерабочий хохлокод
// const bin = (arr, val) => {
//   let step = 1
//   let mid = Math.floor(arr.length / 2)
//   if (val > arr[arr.length - 1]) {
//     return `404`
//   }
//   while (mid >= 0 && mid < arr.length) {
//     myConsole(`${step}: mid is ${mid} at ${arr[mid]}`)
//     if (arr[mid] === val) {
//       return `<div>${val} in position ${mid} of array: [${arr}]</div>`
//     }
//
//     if (arr[mid] > val) {
//       mid = Math.floor(mid / 2)
//       myConsole(`mid set at left of previous ${mid} at ${arr[mid]}`)
//     } else {
//       if (arr[mid] < val) {
//         mid = mid + Math.floor((arr.length - mid) / 2)
//         myConsole(`mid set at right of previous ${mid} at ${arr[mid]}`)
//       }
//     }
//
//     step++
//   }
//
//   return `404`
// }
