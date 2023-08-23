function solution(common) {
    let c = 0;
    let b = 0;
    
	if (common[2] - common[1] == common[1] - common[0]) {
        c = common[1] - common[0];
		return common[common.length - 1] + c;
    } else {
        b = common[1] / common[0];
        return common[common.length - 1] * b;
    }
}