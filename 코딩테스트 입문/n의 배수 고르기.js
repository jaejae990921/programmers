function solution(n, numlist) {
    let answer = numlist.filter(a => a%n == 0);
    return answer;
}