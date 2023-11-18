function solution(myString, pat) {
    let len = pat.length;
    let cnt = 0;
    
    for (let i = 0; i <= myString.length - len; i++) {
        if (myString.substr(i, len) == pat) cnt++;
    }
    
    return cnt;
}