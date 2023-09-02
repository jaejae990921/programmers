function solution(d, budget) {
  let sort = d.sort((a, b) => a - b);
  let cnt = 0;

  for (let num of d) {
    if (num <= budget) {
      budget -= num;
      cnt++;
    } else {
      break;
    }
  }

  return cnt;
}
