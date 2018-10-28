function make(...arr) {
    let len = arr.length;
    if (typeof arr[len - 1] === 'function') {
        return arr.slice(0, len - 1).reduce(arr[len - 1]);
    }
    else {
	    return make.bind(null, ...arr);
    }
}

function sum(a, b) {
    return a + b;
}
console.log(make(15)(34,21,666)(41)(sum));