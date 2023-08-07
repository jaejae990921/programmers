function solution(letter) {
    let answer = '';
    let letterArr = letter.split(' ');
    let mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let idx;
    
    for (i of letterArr) {
        for (let j = 0; j < mos.length; j++) {
            if (i === mos[j]) {
                idx = mos.indexOf(mos[j]);
                answer += String.fromCharCode(idx + 97);
            }
        }
    }
        
    return answer;
}