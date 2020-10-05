module.exports = function reverse(n) {
    let plus = Math.abs(n);
    let rev = String(plus).split("").reverse().join("");
    return +rev;
};
