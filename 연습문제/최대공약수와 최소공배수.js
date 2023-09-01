function solution(n, m) {
    let gcd = getGcd(n,m);
    return [gcd, (n*m / gcd)];
    
    function getGcd (a, b) {
        let gcd = 1;
        for (let i = 2; i <= Math.min(a, b); i++) {
            if (a % i === 0 && b % i === 0) {
                gcd = i;
            }
        }
        return gcd;
    }
}