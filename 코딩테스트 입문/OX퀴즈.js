function solution(quiz) {
    let sum = 0;
    let answer = [];
    quiz.forEach((q) => {
        let [left, op, right, eq, res] = q.split(' ');
        
        if (op === '+') {
            sum = Number(left) + Number(right);
        } else {
            sum = Number(left) - Number(right);
        }
        
        answer.push(sum == res ? "O" : "X");
    });
    return answer;
}