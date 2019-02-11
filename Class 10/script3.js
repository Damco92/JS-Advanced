
let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 11, () => `I'm a number`, 33];

Array.prototype.getSum = function () {
    let result = 0;
    for(let el of this){
        if(typeof el === 'number'){
            result += el;
        }
    }
    return result;
}

let result = arr.getSum();
console.log(result);

