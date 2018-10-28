let tree = {"value":100,
    "left": {"value":90, "left":{"value":70}, "right":{"value":99 }},
    "right":{"value":120,"left":{"value":110},"right":{"value":130}}
};
// depth - индекс массива, в который нужно запушить
function recursion(currentNode, depth = 0, res = []) {
    if(!currentNode) {
        return res;
    }
    if(!res[depth]) {
        res[depth] = [];
    }
    res[depth].push(currentNode.value);
    recursion(currentNode.left, depth + 1, res);
    recursion(currentNode.right, depth + 1, res);
    return res;
}

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]
