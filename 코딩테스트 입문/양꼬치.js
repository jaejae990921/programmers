function solution(n, k) {
    let sum = n * 12000;
    let ser = Math.floor(n / 10);
    let drink = ser >= k ? 0 : k - ser;
    sum = sum + (drink * 2000);
    return sum;
}