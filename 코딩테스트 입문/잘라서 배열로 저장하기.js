function solution(my_str, n) {
    let str = [];
    
    for (let i = 0; i < my_str.length; i+=n) {
        str.push(my_str.slice(i, i+n));
    }
    
    return str;
}