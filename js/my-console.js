function myConsole(text) {
  let child = document.createElement('div')
  child.innerHTML = text
  document.querySelector('#console').appendChild(child)
}
