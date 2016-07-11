function isNull(obj) {
    if (obj === null) {
        return true;
    } else {
        return false;
    }
}

console.log(isNull(undefined),
            isNull(null));
