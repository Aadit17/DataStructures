class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  set(key,value){
      let address=this._hash(key);
      if(!this.data[index]){
          
      }

      return 
  }
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  