function solution(t, p) {
    let tLen = t.length;
    let pLen = p.length;
    let pN = Number(p);
    let cnt = 0;
    
    for (let i = 0; i <= tLen - pLen; i++) {
        if (Number(t.slice(i, i + pLen)) <= pN) {
            cnt++;
        }
    }
    
    return cnt;
}