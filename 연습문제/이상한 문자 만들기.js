function solution(s) {
  let arr = s.split(" ");
  let answer = [];

  for (let word of arr) {
    let str = "";
    for (let i = 0; i < word.length; i++) {
      str += i % 2 == 0 ? word[i].toUpperCase() : word[i].toLowerCase();
    }
    answer.push(str);
  }

  return answer.join(" ");
}
