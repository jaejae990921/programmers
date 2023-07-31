function solution(numer1, denom1, numer2, denom2) {
    let son = (numer1 * denom2) + (numer2 * denom1);
    let mom = denom1 * denom2;
    let max = 1;
    
    for (let i = 1; i <= son; i++) {
        if(son%i === 0 && mom%i === 0) {
            max = i
        }
    }
    return [son / max, mom / max];
}