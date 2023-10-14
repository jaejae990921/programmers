function solution(my_string) {
    let sp = my_string.split(' ');
    let answer = sp.filter((word) => {
        return word != ''; 
    });
    
    return answer;
}