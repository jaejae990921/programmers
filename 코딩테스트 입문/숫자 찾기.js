function solution(num, k) {
    let numS = num.toString().split('');
    let answer = numS.indexOf(k+'') + 1 || -1;
    
    return answer;
}