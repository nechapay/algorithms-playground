const findEven = (s) => {
  let arr = Array.from(s)
  arr.sort().reverse()
  let j = arr[arr.length - 1] - '0'
  if (j % 2 !== 0) {
    for (let i = arr.length - 2; i >= 0; i--) {
      j = arr[i] - '0'
      if (j % 2 === 0) {
        let tmp = arr[i]
        arr[i] = arr[arr.length - 1]
        arr[arr.length - 1] = tmp
        let arr2 = Array.from({length: arr.length - 1}, (_) => '')
        for (let k = 0; k < arr.length - 1; k++) {
          arr2[k] = arr[k]
        }
        arr2.sort().reverse()
        return arr2.join('') + '' + arr[arr.length - 1]
      }
    }
  }

  return arr.join('')
}

/* class Solution{
    public:
    string LargestEven(string s){
        int i, j;
        char a, b;
        sort(s.begin(),s.end());
        reverse(s.begin(),s.end());
        j = s[s.length()-1]-'0';
        if(j % 2 == 1){
            for(i=s.length()-1; i>=0; i--){
              j = s[i]-'0';
              a = s[i];
              if(j%2==0){
                b = s[s.length()-1];
                s[s.length()-1]=a;
                s[i]=b;
                sort(s.begin(),s.end()-1);
                reverse(s.begin(),s.end()-1);
                break;
              }
            }
        }
        return s;
    }

};
 */
