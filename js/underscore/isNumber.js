function isNumber(obj) {
    if (typeof (obj) === "number") {
        return true;
    } else {
        return false;
    }
}

console.log("numbers:",isNumber(8.4 * 5),
            "NaN:",isNumber(NaN),
            "another:",isNumber(null)
);
