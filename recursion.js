let tree = {"value":100,
    "left": {"value":90, "left":{"value":70}, "right":{"value":99 }},
    "right":{"value":120,"left":{"value":110},"right":{"value":130}}
};
let tree2 = {"value":1,
"left": {"value":2, "right":{"value":3}},
"right":{"value":4,"left":{"value":5}}
};
let tree3 = {"value":125};

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
console.log(recursion(tree2));  // [[1], [2, 4], [3, 5]]
console.log(recursion(tree3));  // [[125]]