function solution(a, b) {
    let one = a + '' + b;
    let two = 2 * a * b;
    
    return one > two ? Number(one) : two
}