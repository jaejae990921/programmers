function solution(s) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((str, idx) => {
        s = s.replaceAll(str, idx);
    });
    
    return Number(s);
}