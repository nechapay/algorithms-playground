const searchPoly = (str) => {
  let s = str.split('')
  let s2 = Array.from({ length: s.length * 2 + 1 }, (i) => (i = '#'))

  for (let i = 0; i < s.length; i++) {
    s2[2 * i + 1] = s[i]
  }

  let p = Array.from({ length: s2.length }, (i) => (i = 0))
  let c, r, idx, max, iMir
  c = r = idx = max = iMir = 0

  for (let i = 0; i < s2.length; i++) {
    iMir = 2 * c - i

    p[i] = r > i ? Math.min(p[iMir], r - i) : 0

    while (i > p[i] && i + 1 + p[i] < s2.length && s2[i - 1 - p[i]] === s2[i + 1 + p[i]]) p[i]++

    if (p[i] + i > r) {
      r = p[i] + i
      c = i
    }

    if (max < p[i]) {
      idx = i
      max = p[i]
    }
  }

  return s2
    .join('')
    .substring(idx - max, idx + max)
    .split('#')
    .join('')
}

const searchMax = (arr) => {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]
  }
  return max
}

const shortWords = (words) => {
  if (!words.length) return ''
  let minLength = words[0].length
  for (const word of words) {
    if (word.length < minLength) minLength = word.length
  }
  let answer = []
  for (const word of words) {
    if (word.length === minLength) answer.push(word)
  }

  return answer.join(' ')
}

function leftFlood(h) {
  let answer = []
  let maxHeight = 0
  for (let i = 0; i < h.length; i++) {
    if (h[i] > maxHeight) maxHeight = h[i]
  }
  let currentHeight = 0
  for (let i = 0; i < maxHeight; i++) {
    if (h[i] > currentHeight) currentHeight = h[i]
    answer += currentHeight - h[i]
  }
  currentHeight = 0
  for (let i = h.length - 1; i < maxHeight; i--) {
    if (h[i] > currentHeight) currentHeight = h[i]
    answer += currentHeight - h[i]
  }
  return answer
}

function rle(input) {
  let output = []
  let current = input[0]
  let count = 0
  for (let i = 1; i < input.length; i++) {
    count++
    if (input[i] !== current) {
      output.push(rlePack(current, count))
      current = input[i]
      count = 0
    }
  }
  output.push(rlePack(current, count))
  return output.join('')
}

function rlePack(str, cnt) {
  if (cnt > 1) {
    str = str + cnt
  }
  return str
}

const aBSearch = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === x) {
        return [arr[i], arr[j]]
      }
    }
  }
  return [0, 0]
}

const abSetSearch = (arr, x) => {
  let p = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (p.has(x - arr[i])) {
      return [arr[i], x - arr[i]]
    }
    p.add(arr[i])
  }
  return [0, 0]
}

const worldsInDict = (dict, text) => {
  let ans = []
  let goodWords = new Set(dict)

  for (const word of dict) {
    for (let i = 0; i < word.length; i++) {
      goodWords.add(word.slice(0, i) + word.slice(i + 1, word.length))
    }
  }
  for (const word of text.split(' ')) {
    if (goodWords.has(word)) ans.push(word)
  }

  return ans
}

const stringToGist = (s) => {
  let dict = {}
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) {
      dict[s[i]] = 0
    }
    dict[s[i]]++
    if (dict[s[i]] > max) {
      max = dict[s[i]]
    }
  }

  let sortedKeys = Object.keys(dict).sort()
  for (let i = max; i > 0; i--) {
    let tmp = ''
    for (const el of sortedKeys) {
      tmp += dict[el] >= i ? '#' : ' '
    }
    console.log(tmp)
  }
  console.log(sortedKeys.join(''))
}

const mergeLists = (first, second) => {
  let result = []
  let iFirst = 0
  let iSecond = 0
  while (iFirst < first.length && iSecond < second.length) {
    if (first[iFirst] < second[iSecond]) {
      result.push(first[iFirst])
      iFirst++
    } else {
      result.push(second[iSecond])
      iSecond++
    }
  }
  while (iFirst < first.length) {
    result.push(first[iFirst])
    iFirst++
  }
  while (iSecond < second.length) {
    result.push(second[iSecond])
    iSecond++
  }

  return result
}
