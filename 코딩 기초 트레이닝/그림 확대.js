function solution(picture, k) {
    let y = picture.length;
    let x = picture[0].length;
    let answer = [];
    let str;

    for (let i = 0; i < y; i++) {
        str = '';

        for (let j = 0; j < x; j++) {
            str += picture[i][j].repeat(k);
        }

        for (let l = 0; l < k; l++) {
            answer.push(str);
        }
    }

    return answer;
}
