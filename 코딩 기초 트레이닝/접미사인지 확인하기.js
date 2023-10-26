function solution(my_string, is_suffix) {
    let flag = false;
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string.slice(i) == is_suffix) {
            flag = true
        }    
    }
    
    return flag ? 1 : 0;
}