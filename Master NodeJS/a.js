const phnNum = 1122233334;

function cntFreq(num) {
    let obj = {};
    while (num > 0) {
        let key = num % 10;
        if(obj[key]) {
            obj[key] = obj[key] + 1;
        } else {
            obj[key] = 1;
        }
        num = num / 10;
    }
    return obj
}

console.log(cntFreq(phnNum));
