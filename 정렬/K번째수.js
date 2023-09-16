function solution(array, commands) {
    let answer = [];
    
    for (let l = 0; l < commands.length; l++) {
        let i = commands[l][0] - 1;
        let j = commands[l][1];
        let k = commands[l][2] - 1;
        
        let arr = array.slice(i, j).sort((a,b) => a-b);
        
        answer.push(arr[k])
    }
    
    return answer;
}