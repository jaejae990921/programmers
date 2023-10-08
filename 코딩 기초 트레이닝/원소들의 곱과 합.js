function solution(num_list) {
    let mul = 1, sum = 0;
    
    num_list.map((num) => {
        mul = mul * num;
        sum = sum + num;
    });
    
    return mul < sum**2 ? 1 : 0;
}
