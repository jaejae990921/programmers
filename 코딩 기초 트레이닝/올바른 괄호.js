function solution(s){
    let answer = true;
    
    let arr = [];
    let sp = s.split('');
    
    for (let i = 0; i < sp.length; i++) {
        if (sp[i] == '\(') {
            arr.push('\(');
        } else {
            arr.length == 0 ? answer = false : arr.pop();
        }
    }
    
    if (arr.length >= 1) answer = false;
    
    return answer;
}