function isUndefined(obj) {
    if (obj === undefined) {
        return true;
    } else {
        return false;
    }
}

console.log(isUndefined(window.missingVariable),
            isUndefined(null));
