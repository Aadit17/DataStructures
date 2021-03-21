/**
 * initialize your data structure here.
 */

var stack=[]
var MinStack = function() {
    stack=[]
    return null
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    stack.push(x)
    return null
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    stack.pop()
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var min=Number.MAX_VALUE
    for(let i=0;i<stack.length;i++){
        if(stack[i]<min)
            min=stack[i]
    }
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */