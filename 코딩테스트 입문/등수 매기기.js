function solution(score) {
    let scArr = [];
    let rank = [];
    
    for (let i = 0; i < score.length; i++) {
        scArr.push(score[i][0] + score[i][1]);
    }
    
    for (let j = 0; j < scArr.length; j++) {
        let cnt = 1;
        for (let k = 0; k < scArr.length; k++) {
            if (scArr[j] < scArr[k]) {
                cnt++;
            }
        }
        rank.push(cnt);
    }
    
    return rank;
}