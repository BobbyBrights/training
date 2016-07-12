function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}


console.log(isEmpty({a: '35'}));
console.log(isEmpty({}));