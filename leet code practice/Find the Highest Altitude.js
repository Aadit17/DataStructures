/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    var netgain=0
    var max=0
    
    for(let i=0;i<=gain.length;i++){
        console.log(netgain,max)
        netgain+=gain[i]
         if(netgain>max)
            max=netgain
        
       
    }
    return max
    
};