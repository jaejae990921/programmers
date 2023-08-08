function solution(num_list, n) {
    let answer = [];
    let len = num_list.length / n;

    for(let i = 0; i < len; i++) {
        let pushVal = [];
        for(let j = 0; j < n; j++) {
            pushVal.push(num_list.shift());
        }
        answer.push(pushVal);
    }

    return answer;
}