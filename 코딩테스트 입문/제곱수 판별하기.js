function solution(n) {
    let num = Math.sqrt(n);
    return num % 1 == 0 ? 1 : 2;
}