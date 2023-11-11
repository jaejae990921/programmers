function solution(binomial) {
    let sp = binomial.split(" ");
    let answer = 0;
    
    switch (sp[1]) {
        case '+':
            answer = Number(sp[0]) + Number(sp[2]);
            break;
        case '-':
            answer = Number(sp[0]) - sp[2];
            break;
        case '*':
            answer = Number(sp[0]) * sp[2];
            break;
    }
    
    return answer;
}