
export function debouncedSearch(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(arguments) }, delay);
    }
}

export function addCommas(input) {
    if (!input) return input;
    let x = input.toString();
    const dot = x.indexOf(".");
    let dec = "";
    if (dot !== -1) {
        dec = x.slice(dot, x.length);
        x = x.slice(0, dot);
    }
    let lastThree = x.substring(x.length, x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    if (dec) res = res + dec;
    return res;
};