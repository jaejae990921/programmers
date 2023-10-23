function solution(s) {
    s = s.toLowerCase();
    
    let answer = s.split(" ").map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    })
    
    return answer.join(" ");
}