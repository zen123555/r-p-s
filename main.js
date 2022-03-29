function computerPlay(){
    let result;
    switch (Math.floor(Math.random()*(3-1+1)) + 1) {
        case 1:
            result = 'scissors'
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'rock';
            break;
        default:
            console.log('default case reached, not correct behavior.');
    }
    return result;
}