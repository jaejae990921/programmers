function solution(my_string, is_prefix) {
    let arr = my_string.split(is_prefix);
    return arr[0] == '' ? 1 : 0;
}