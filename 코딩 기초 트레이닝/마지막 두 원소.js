function solution(num_list) {
    const len = num_list.length;
    const flag = num_list[len-1] > num_list[len-2];
    
    num_list.push(flag ? num_list[len-1] - num_list[len-2] : num_list[len-1] * 2);
    
    return num_list;
}