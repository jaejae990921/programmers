function solution(before, after) {
    let bS = [...before].sort().join('');
    let aS = [...after].sort().join('');

    return bS === aS ? 1 : 0;
}