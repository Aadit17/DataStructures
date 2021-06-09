const getBit=(n,pos)=>{
      return (n &(1<<pos)) !==0?1:0
}
const setBit=(n,pos)=>{
    return n | (1<<pos)
}

const clearBit=(n,pos)=>{
    var mask=~(1<<pos)
    return (n & mask)
}

const updateBit=(n,pos,val)=>{
    var mask=~(1<<pos)
    n=n & mask
    return (n | (val<<pos))
}

console.log(getBit(5,2))
console.log(getBit(5,3))
console.log(getBit(5,1))
console.log(getBit(5,0))
console.log(setBit(5,3))
console.log(clearBit(5,2))
console.log(updateBit(5,0,0))