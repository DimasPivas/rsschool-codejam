function sumOfOther(arr) {
    let result = [];
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let sum = 0;
        for(let j = 0; j < len; j++) {
            if (j !== i) {
                sum += arr[j];
            }
        }
        result.push(sum);
    }
    return result;
}

console.log(sumOfOther([3, 2, 4, 1]));
console.log(sumOfOther([0]));
console.log(sumOfOther([1, 0]));
console.log(sumOfOther([]));
console.log(sumOfOther([15, 65, 10, 25, 35, 10]));