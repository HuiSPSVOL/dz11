// logArguments
// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати
// всі аргументи, передані у функцію-аргумент.
function logArguments(fn) {
    return function(...args) {
        console.log('Аргументи функції:', args);
        return fn(...args);
    };
}
function add(a, b) {
    return a + b;
}
const loggedAdd = logArguments(add);

console.log(loggedAdd(2, 3));