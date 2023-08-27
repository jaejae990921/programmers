function solution(s) {
    let flag = true;
    let p = 0;
    let y = 0;

    for (let ch of s) {
        if (ch === 'p' || ch === 'P') {
            p++;
        } else if (ch === 'y' || ch === 'Y') {
            y++;
        }
    }
        
    return p === y ? true : false
}