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
