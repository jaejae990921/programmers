function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        let str = '';
        let arr1Str = cal(n, arr1[i].toString(2));
        let arr2Str = cal(n, arr2[i].toString(2));
        
        for (let j = 0; j < n; j++) {
            if (arr1Str[j] == '0' && arr2Str[j] == '0') {
                str += ' ';
            } else {
                str += '#';
            }
        }
        
        answer.push(str);
    }
    
    return answer;
}

function cal(n, str) {
    let len = n - str.length;
    let re = '';
    
    for (let i = 0; i < len; i++) {
        re += '0';
    }
    
    return re.concat(str);
}