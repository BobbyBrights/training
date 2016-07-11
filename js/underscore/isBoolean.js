function isBoolean(obj) {
    if (obj === false || obj === true  ) {
        return true;
    } else {
        return false;
    }
}

console.log('true:',isBoolean(true),
            'false:',isBoolean(false),
            'another:',isBoolean(null));
