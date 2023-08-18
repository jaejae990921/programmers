function solution(keyinput, board) {
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    
    let X = 0;
    let Y = 0;
    
    keyinput.forEach((input) => {
        switch (input) {
            case "right" :
                X++;
                break;
            case "left" :
                X--;
                break;
            case "up" :
                Y++;
                break;
            case "down" :
                Y--;
                break;
        }
        if (Math.abs(X) > maxX) {
            X = X > 0 ? maxX : maxX * -1
        } else if (Math.abs(Y) > maxY) {
            Y = Y > 0 ? maxY : maxY * -1
        }
    })
    
    return [X, Y];
}