function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

// types of exports

// default export_single export
// module.exports = { add, subtract };

// multiple export
exports.add1 = (a, b) => a+b;
exports.sub1 = (a, b) => a-b;
