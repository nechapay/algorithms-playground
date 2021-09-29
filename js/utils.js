// generates array from 1 to val
const getArr = (val) => {
  let arr = []
  for (let i = 0; i < val; i++) {
    arr.push(i + 1)
  }
  return arr
}
// generates array of random int
const getArrOfRand = (val) => {
  let arr = []
  for (let i = 0; i < val; i++) {
    arr.push(getRandomInt(0, 100))
  }
  return arr
}

// returns random int
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function printArray(arr, description, target) {
  target = target || '#console'
  description = description || ''
  let arrayContainer = document.createElement('div')
  arrayContainer.classList.add('array-container')
  arrayContainer.classList.add('fl-c-fs')
  document.querySelector(target).appendChild(arrayContainer)
  for (let i = 0; i < arr.length; i++) {
    let arrayItemContainer = document.createElement('div')
    arrayItemContainer.classList.add('array-item-container')
    arrayItemContainer.classList.add('fl-c-c')
    arrayContainer.appendChild(arrayItemContainer)

    let arrayIndex = document.createElement('div')
    arrayIndex.classList.add('array-item')
    arrayIndex.classList.add('array-item__index')
    arrayIndex.classList.add('fl-c-c')
    arrayIndex.innerText = i.toString()
    arrayItemContainer.appendChild(arrayIndex)

    let arrayItem = document.createElement('div')
    arrayItem.classList.add('array-item')
    arrayItem.classList.add('array-item__value')
    arrayItem.classList.add('fl-c-c')
    arrayItem.innerText = arr[i].toString()
    arrayItemContainer.appendChild(arrayItem)
  }
  let arrayDesc = document.createElement('div')
  arrayDesc.classList.add('array-description-container')
  arrayDesc.classList.add('fl-c-c')
  arrayDesc.innerHTML = `<p>${description}</p>`
  arrayContainer.appendChild(arrayDesc)
}
