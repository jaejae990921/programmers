function solution(arr, divisor) {
    let answer = [];
    for (let num of arr) {
        if (num % divisor === 0) {
            answer.push(num);
        }
    }
    return answer.length > 0 ? answer.sort((a,b) => a-b) : [-1];
}