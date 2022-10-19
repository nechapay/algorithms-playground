class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
// generates array from 1 to val
const getArr = (val) => {
  return Array.from({ length: val }, (i, k) => k)
}
// generates array of random int
const getArrOfRand = (val, min = 0, max = 100) => {
  return Array.from({ length: val }, (i) => (i = getRandomInt(min, max)))
}

// returns random int
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function printArray(arr, target, description) {
  target = target || '#console'
  description = description || ''
  let arrayContainer = document.createElement('div')
  arrayContainer.classList.add('array-container')
  arrayContainer.classList.add('d-flex')
  arrayContainer.classList.add('align-items-center')
  arrayContainer.classList.add('justify-content-start')
  document.querySelector(target).appendChild(arrayContainer)
  for (let i = 0; i < arr.length; i++) {
    let arrayItemContainer = document.createElement('div')
    arrayItemContainer.classList.add('array-item-container')
    arrayItemContainer.classList.add('d-flex')
    arrayItemContainer.classList.add('align-items-center')
    arrayItemContainer.classList.add('justify-content-center')
    arrayContainer.appendChild(arrayItemContainer)

    let arrayIndex = document.createElement('div')
    arrayIndex.classList.add('array-item')
    arrayIndex.classList.add('array-item__index')
    arrayIndex.classList.add('d-flex')
    arrayIndex.classList.add('align-items-center')
    arrayIndex.classList.add('justify-content-center')
    arrayIndex.innerText = i.toString()
    arrayItemContainer.appendChild(arrayIndex)

    let arrayItem = document.createElement('div')
    arrayItem.classList.add('array-item')
    arrayItem.classList.add('array-item__value')
    arrayItem.classList.add('d-flex')
    arrayItem.classList.add('align-items-center')
    arrayItem.classList.add('justify-content-center')
    arrayItem.innerText = arr[i].toString()
    arrayItemContainer.appendChild(arrayItem)
  }
  let arrayDesc = document.createElement('div')
  arrayDesc.classList.add('array-description-container')
  arrayDesc.classList.add('d-flex')
  arrayDesc.classList.add('align-items-center')
  arrayDesc.classList.add('justify-content-center')
  arrayDesc.innerHTML = `<p>${description}</p>`
  arrayContainer.appendChild(arrayDesc)
}

function createDiv(id, description, target) {
  target = target || '#console'
  description = description || ''
  let element = document.createElement('div')
  element.classList.add('algorithm-container')
  element.classList.add('d-flex')
  element.classList.add('flex-column')
  element.setAttribute('id', id)
  document.querySelector(target).appendChild(element)
  if (description !== '') {
    let header = document.createElement('div')
    header.classList.add('algorithm-container__header')
    header.classList.add('d-flex')
    header.classList.add('align-items-center')
    header.classList.add('justify-content-center')
    header.innerHTML = `<p>${description}</p>`
    document.querySelector(`#${id}`).appendChild(header)
  }
}

function appendTime(id, time) {
  document.querySelector(`${id} .algorithm-container__header`).textContent = `${
    document.querySelector(`${id} .algorithm-container__header`).textContent
  } - ${time} ms`
}
