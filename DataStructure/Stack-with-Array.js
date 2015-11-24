// 배열을 이용하는 Stack
function Stack() {
    this.stack = [];
    this.popValue;
}

Stack.prototype.push = function(v) {
    this.stack[this.stack.length++] = v;
}

Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
}

Stack.prototype.pop = function() {
    if (this.stack.length === 0) return undefined;
    this.popValue = this.stack[this.stack.length - 1];
    this.stack.length--;
    return this.popValue;
}