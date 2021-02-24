module.exports = function hello(message) {
    if (typeof message !== "string") throw new TypeError("Oh dear! please say 'hello'");
    return 'Hello ' + message + '!';
};
