// You are given a string containing only 4 kinds of characters 'Q', 'W', 'E'
// and 'R'.

// A string is said to be balanced if each of its characters appears n / 4 times 
// where n is the length of the string.

// Return the minimum length of the substring that can be replaced with any other 
// string of the same length to make the original string s balanced.

// Return 0 if the string is already balanced.


//Using a sliding window approach for O(n) time
//Figure out what's happening
// var balancedString = function (s) { 
//     let qwerMap = new Map();
//     for (let i = 0; i < s.length; i++) {
//         qwerMap.set(s[i], qwerMap.get(s[i]) === undefined ? 1 : qwerMap.get(s[i]) + 1);
//     }

//     let desiredCharVal = s.length / 4;
//     let counter = 0;

//     qwerMap.forEach(ele => {
//         counter += Math.abs(desiredCharVal - ele);
//     })

//     return counter;
// };

const balancedString = s => {
  let map = {};
  let n = s.length;
  let res = n;
  let i = 0;
  let k = n / 4;

  for (let j = 0; j < n; ++j) {
    map[s[j]] = ~~map[s[j]] + 1;
  }

  map['Q'] = map['Q'] || k;
  map['W'] = map['W'] || k;
  map['E'] = map['E'] || k;
  map['R'] = map['R'] || k; 
    
  for (let j = 0; j < n; ++j) {
    --map[s[j]];
      
    while (i < n && map['Q'] <= k && map['W'] <= k && map['E'] <= k && map['R'] <= k) {
      res = Math.min(res, j - i + 1);
      map[s[i]]++;
      i++;
    }
  }

  return res;
};

console.log(balancedString('qqqqwwer'));
