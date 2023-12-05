function solution(myStr) {
    let result = myStr.split(/[a|b|c]/g).filter(ch => ch);
    return result.length ? result : ["EMPTY"]
}