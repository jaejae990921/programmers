function solution(i, j, k) {
    let str = '';
    
    for (let l = i; l <= j; l++) {
        str += l.toString();
    }
       
    return str.split('').filter(ch => ch == k).length;
}