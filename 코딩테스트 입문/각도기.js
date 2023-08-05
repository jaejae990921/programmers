function solution(angle) {
    let res;
    if (angle / 90 < 1) {
        res = 1;
    } else if (angle / 90 === 1) {
        res = 2;
    } else if (angle / 90 === 2 ) {
        res = 4;
    } else {
        res = 3
    }
    return res;
}