function isString(obj) {
    if (typeof obj === "string") {
        return true;
    } else {
        return false;
    }
}

console.log("string:",isString("kotiki"),
            "another:",isString(null));
