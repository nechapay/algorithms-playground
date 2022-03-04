const gnomeSort = (initialArray) => {
  let arr = [...initialArray]
  let gnome = 1
  while (gnome < arr.length) {
    if (gnome === 0) gnome++
    if (arr[gnome] >= arr[gnome - 1]) {
      gnome++
    } else {
      let tmp = arr[gnome]
      arr[gnome] = arr[gnome - 1]
      arr[gnome - 1] = tmp
      gnome--
    }
  }
  return arr
}
