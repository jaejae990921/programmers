function solution(lines) {
    let cnt = 0;
    let arr = new Array(200).fill(0);
  
    for (let i = 0; i < 3; i++) {
      let start = lines[i][0];
      let end = lines[i][1];
  
      for (let j = start; j < end; j++) {
        arr[j + 100] += 1;
      }
    }
  
    for (num of arr) {
      if (num > 1) {
        cnt += 1;
      }
    }
  
    return cnt;
  }