let array = [1,2,3,4,5];
// Complete the miniMaxSum function below.
const miniMaxSum = arr => {
    let sum = 0;
    let min = 1;
    let max = 1;
    arr.forEach(element => {
        sum += element;
        if(min > element){
            element = min;
        } else if (element > max){
            max = element;
        }
    });
    let sumMax = sum - min;
    let sumMin = sum - max;
    return `The min sum is ${sumMin} and the max sum is ${sumMax}`;
}

console.log(miniMaxSum(array))