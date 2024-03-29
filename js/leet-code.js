function twoSum(nums, target) {
  for (i = 0; i < nums.length - 1; i++) {
    for (let ii = i + 1; ii < nums.length; ii++) {
      if (nums[i] + nums[ii] === target) {
        return [i, ii]
      }
    }
  }
  return []
}

function twoSum2(nums, target) {
  const m = new Map()
  for (i = 0; i < nums.length; i++) {
    m.set(nums[i], i)
  }
  let diff = 0
  for (i = 0; i < nums.length; i++) {
    diff = target - nums[i]
    if (m.has(diff) && i !== m.get(diff)) {
      return [i, m.get(diff)]
    }
  }
  return []
}

function twoSum3(nums, target) {
  const m = new Map()
  for (i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (m.has(diff)) return [m.get(diff), i]
    m.set(nums[i], i)
  }

  return []
}

function longestSubstring(s) {
  let arr = s.split('')
  let maxLen = arr.length ? arr[0].length : 0
  for (let i = 0; i < arr.length - 1; i++) {
    let str = arr[i]
    for (let ii = i + 1; ii < arr.length; ii++) {
      if (str.indexOf(arr[ii]) === -1) {
        str = str + arr[ii]
      } else {
        break
      }
    }
    if (maxLen < str.length) maxLen = str.length
  }
  return maxLen
}

function longestSubstring2(s) {
  const set = new Set()
  let max = 0
  let prev = 0
  for (current = 0; current < s.length; current++) {
    while (set.has(s[current])) {
      set.delete(s[prev])
      prev++
    }
    set.add(s[current])
    max = Math.max(max, current - prev + 1)
  }

  return max
}

function zigZagConvert(s, numRows) {
  let mtx = []
  let idx = 0
  let row = 0
  let col = 0
  if (numRows === 1 || !s) return s
  for (let i = 0; i < numRows; i++) {
    mtx.push([])
  }
  while (idx < s.length) {
    while (row < numRows && s[idx]) {
      mtx[row][col] = s[idx]
      idx++
      row++
    }
    row = row - 2
    while (row > 0 && s[idx]) {
      col++
      mtx[row][col] = s[idx]
      row--
      idx++
    }
    row = 0
    col++
  }
  let result = ''
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < mtx[r].length; c++) {
      result = mtx[r][c] ? result + mtx[r][c] : result
    }
  }
  return result
}

function zigZag2(s, numRows) {
  if (numRows === 1 || !s) return s
  let result = ''
  let n = s.length
  let dx = 2 * numRows - 2
  for (let i = 0; i < numRows; i++) {
    for (let ii = 0; ii + i < n; ii += dx) {
      result += s[i + ii]
      if (i !== 0 && i !== numRows - 1 && ii + dx - i < n) {
        result += s[ii + dx - i]
      }
    }
  }
  return result
}

const reverse = function (x) {
  let result =
    x >= 0 ? parseInt(('' + x).split('').reverse().join('')) : -1 * parseInt(('' + x).split('').reverse().join(''))
  return result > 2147483647 || result < -2147483648 ? 0 : result
}

const myAtoi = (s) => {
  let str = ''
  let digits = '0123456789'
  let sign = null
  let signed = false
  if (!s) return 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && !str) {
      if (signed) return 0
      continue
    }
    if (s[i] === '-' && !str) {
      if (signed) return 0
      sign = false
      signed = true
      continue
    }
    if (s[i] === '+' && !str) {
      if (signed) return 0
      sign = true
      signed = true
      continue
    }

    if (digits.indexOf(s[i]) !== -1) {
      str += s[i]
    } else break
    if (signed && !str) return 0
  }
  if (!str) return 0
  let result = sign !== false ? parseInt(str) : -1 * parseInt(str)
  result = result > 2147483647 ? 2147483647 : result
  result = result < -2147483648 ? -2147483648 : result
  return result
}

const isPalindrome = (x) => {
  return x.toString() === x.toString().split('').reverse().join('')
}

const isPalindrome2 = (x) => {
  if (x < 0) return false
  if (x >= 0 && x < 10) return true
  let t = x
  let y = 0
  while (t > 0) {
    let digit = t % 10
    y = y * 10 + digit
    t = Math.floor(t / 10)
  }
  return x === y
}

function romanToInt(s) {
  let str = s.toUpperCase()
  const roman = 'IVXLCDM'
  let i = 0
  result = 0
  while (i < str.length) {
    if (str[i].indexOf === -1) return 0
    if (str[i] === 'I') {
      if (str[i + 1] && str[i + 1] === 'V') {
        result += 4
        i += 2
        continue
      }
      if (str[i + 1] && str[i + 1] === 'X') {
        result += 9
        i += 2
        continue
      }
      result++
      i++
      continue
    }
    if (str[i] === 'V') {
      result += 5
      i++
      continue
    }
    if (str[i] === 'X') {
      if (str[i + 1] && str[i + 1] === 'L') {
        result += 40
        i += 2
        continue
      }
      if (str[i + 1] && str[i + 1] === 'C') {
        result += 90
        i += 2
        continue
      }
      result += 10
      i++
      continue
    }
    if (str[i] === 'L') {
      result += 50
      i++
      continue
    }
    if (str[i] === 'C') {
      if (str[i + 1] && str[i + 1] === 'D') {
        result += 400
        i += 2
        continue
      }
      if (str[i + 1] && str[i + 1] === 'M') {
        result += 900
        i += 2
        continue
      }
      result += 100
      i++
      continue
    }
    if (str[i] === 'D') {
      result += 500
      i++
      continue
    }
    if (str[i] === 'M') {
      result += 1000
      i++
      continue
    }
  }
  return result
}

function romanToInt2(s) {
  let str = s.toUpperCase()
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = roman[str[str.length - 1]]
  for (let i = str.length - 2; i >= 0; i--) {
    let cur = roman[str[i]]
    let next = roman[str[i + 1]]

    if (cur < next) result -= cur
    else result += cur
  }
  return result
}

function isMatch(s, p) {
  const m = s.length
  const n = p.length
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(false))

  dp[0][0] = true

  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j]
        }
      }
    }
  }

  return dp[m][n]

  // if (p.indexOf('*') === -1 && p.indexOf('.') === -1) return s === p
  // if (p.indexOf('*') === -1 && p.indexOf('.') !== -1) return s.length === p.length
  // if (p === '.*') return true
  // let i = 0
  // let j = 0
  // let curStar = ''
  // while (i < s.length) {
  //   console.log('s[i]', i, s[i], 'p[j]', j, p[j])
  //   if (!p[j]) {
  //     if (p[j - 1] !== s[i]) {
  //       console.log('exit p')
  //       return false
  //     }
  //     break
  //   }
  //   if (s[i] !== p[j] && p[j] !== '*' && p[j] !== '.') {
  //     if (p[j + 1] === '*') {
  //       curStar = p[j]
  //       console.log('set cur star', p[j])
  //       j++
  //       continue
  //     }
  //     console.log('exit !=')
  //     return false
  //   }
  //   if (p[j] === '.') {
  //     curStar = ''
  //     i++
  //     j++
  //     continue
  //   }

  //   if (curStar === s[i]) {
  //     i++
  //     continue
  //   }

  //   if (curStar !== '' && p[j + 1] !== s[i] && p[j + 1] !== '.') {
  //     console.log('exit *', curStar, p[j], p[j + 1], s[i], j)
  //     return false
  //   } else {
  //     if (p[j + 1] === s[i]) {
  //       j++
  //       curStar = ''
  //       starCount = 0
  //       continue
  //     }
  //   }
  //   if (s[i] !== p[j] && p[j] === '*' && s[i - 1] === s[i]) {
  //     curStar = s[i - 1]
  //     i++
  //     continue
  //   } else {
  //     if (p[j + 1] === s[i]) {
  //     }
  //   }
  //   i++
  //   j++
  // }
  // while (j < p.length) {
  //   if (s[i] !== p[j] && p[j] !== '*' && p[j] !== '.') {
  //     if (p[j + 1] === '*') {
  //       j++
  //       continue
  //     }
  //     console.log('exit !=')
  //     return false
  //   }
  //   j++
  // }

  // return true
}
/*We can use dynamic programming to solve this problem. Let dp[i][j] be a boolean value representing whether the first i characters of s match the first j characters of p.

First, we initialize dp[0][0] to true since an empty pattern matches an empty string.

Next, we need to consider the first row of the dp matrix. If the pattern p starts with a '' then it can match zero occurrences, so we set dp[0][j] to dp[0][j-2] for all j where p[j-1] == ''.

Now we fill in the remaining cells of the dp matrix using the following rules:

If the i-1th character of s matches the j-1th character of p or the j-1th character of p is '.', then dp[i][j] is equal to dp[i-1][j-1].
If the j-1th character of p is '*', then we have two cases:
a) Zero occurrences: dp[i][j] is equal to dp[i][j-2]
b) One or more occurrences: dp[i][j] is equal to dp[i-1][j] if the i-1th character of s matches the j-2th character of p or the j-2th character of p is '.'.
Finally, we return dp[m][n], which represents whether the entire string s matches the entire pattern p.*/

function maxArea(height) {
  if (height.length < 2) return 0
  let i = 0
  let j = height.length - 1
  let max = 0
  while (i < j) {
    let dx = Math.min(height[i], height[j])
    max = Math.max(max, dx * (j - i))
    if (max < s) max = s
    console.log(max, s)
    if (height[j] > height[i]) {
      i++
    } else {
      j--
    }
  }
  return max
}

function intToRoman(num) {
  let t = num
  let roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  let result = ''
  let n = num.toString().length - 1
  for (let i = Math.pow(10, n); i > 0; i = Math.floor(i / 10)) {
    let d = t - (t % i)
    let j = Math.floor(t / i)
    if (roman[d]) {
      result += roman[d]
    } else {
      let m = j % 5
      if (m !== 0) {
        let o = (j - m) * i
        if (o >= 5) result += roman[o]
        for (let k = 0; k < (d - o) / i; k++) {
          result += roman[i]
        }
      } else {
        for (let k = 0; k < j; k++) {
          result += roman[d / j]
        }
      }
    }
    t = t % i
  }
  console.log(romanToInt2(result), num)
  return result
}

function longestCommonPrefix(strs) {
  let n = strs.length
  if (!n) return ''
  let j = 0
  let res = ''
  let all = true
  while (j < strs[0].length) {
    let pref = strs[0].slice(0, j + 1)
    for (let i = 1; i < n; i++) {
      let p = strs[i].slice(0, j + 1)
      if (p !== pref) {
        all = false
        break
      }
    }
    j++
    if (all) res = pref
    else break
  }
  return res
}

function threeSum2Pointers(nums) {
  let result = []
  if (nums.length < 3) return result

  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let low = i + 1
    let high = nums.length - 1
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high]
      if (sum > 0) {
        high--
      } else if (sum < 0) {
        low++
      } else {
        result.push([nums[i], nums[low], nums[high]])
        let lastLow = nums[low]
        let lastHigh = nums[high]
        while (low < high && nums[low] === lastLow) low++
        while (low < high && nums[high] === lastHigh) high--
      }
    }
  }

  return result
}

function threeSumHashMap(nums) {
  let result = []
  if (nums.length < 3) return result

  nums.sort((a, b) => a - b)
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    for (let j = i + 1; j < nums.length - 1; j++) {
      let req = -1 * (nums[i] + nums[j])
      if (hashMap.has(req) && hashMap.get(req) > j) {
        result.push([nums[i], nums[j], req])
      }
      j = hashMap.get(nums[j])
    }
    i = hashMap.get(nums[i])
  }
  return result
}

function threeSumClosest(nums, target) {
  let min = Infinity
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let h = nums.length - 1
    while (l < h) {
      let sum = nums[i] + nums[l] + nums[h]
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }
      if (sum === target) return sum
      else if (sum < target) l++
      else h--
    }
  }
  return min
}
