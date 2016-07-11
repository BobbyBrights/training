function isBoolean(obj) {
    if (typeof (obj) === "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log('true:',isBoolean(true),
            'false:',isBoolean(false),
            'another:',isBoolean(null));
