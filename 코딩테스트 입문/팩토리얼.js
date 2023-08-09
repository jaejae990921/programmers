function solution(n) {
    let num = 1;
    if (n == 1) return 1;
    
    while (true) {
        n = n / num;
        if (num > n) {
            break;
        }
        num++;
    }
    return num;
}