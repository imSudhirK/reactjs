
export function debouncedSearch(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(arguments) }, delay);
    }
}