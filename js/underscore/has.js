function has(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(has({a: 1, b: 2, c: 3}, "k"));