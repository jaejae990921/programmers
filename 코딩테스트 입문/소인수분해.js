function solution(n) {
    let soArr = [];
    let so = 2;
    
    while (n >= 2) {
      if (n % so === 0) {
        soArr.push(so)
        n = n / so;
      } else {
          so++;
      }
    }
    return [...new Set(soArr)];
  }