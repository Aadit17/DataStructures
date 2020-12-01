class Array{
    constructor(){
      this.name={};
      this.size=0;
    }
    get(index){
      return this.name[index];
    }
   push(ele){
     this.name[this.size]=ele;
     this.size++;
   }
   pop(){
     var item=this.name[this.size - 1];
     delete this.name[this.size-1];
     return this.size--;
   }
   delete(index){
     this.shift(index);
   }
   shift(index){
     for(var i=index; i< this.size -1; i++){
       this.name[i]=this.name[i+1];
     }
     delete this.name[this.size -1];
     return this.size--;
   }
  
  }
  
  let arr=new Array();
  arr.push("hii");
  arr.push("hello");
  arr.push("go");
  arr.push("lol");
  arr.delete(2);

  console.log(arr);