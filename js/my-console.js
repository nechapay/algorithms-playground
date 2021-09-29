function myConsole(text, target) {
  target = target || '#console'
  let child = document.createElement('div')
  child.innerHTML = text
  document.querySelector(target).appendChild(child)
}
