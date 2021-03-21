// let queue=[]
// var RecentCounter = function() {
//     queue=[]
// };

// /** 
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//     queue.push(t)
// };

// /** 
//  * Your RecentCounter object will be instantiated and called as such:
//  * var obj = new RecentCounter()
//  * var param_1 = obj.ping(t)
//  */

let queue=[];
let count=0;
var RecentCounter = function() {
    queue=[];
    count=0;
};
RecentCounter.prototype.ping = function(t) {
    let range=[t-3000,t];
    queue.push(t);
    count=0;
    for(let i=0;i<queue.length;i++){
      if(queue[i]>=range[0] && queue[i]<=range[1]){
            count++;
        }
    }
    return count
};