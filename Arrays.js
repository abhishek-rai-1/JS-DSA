class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  get(index) {
    if(index > this.length -1)  return null
    return this.data[index];
  }

  pop() {
    const popedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popedItem;
  }

  shift() {
    const shiftItem = this.data[0];

    // re-assigning
    for (let i = 0; i < this.length - 1; i++) this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length--;

    return shiftItem;
  }

  deleteByIndex(index){
    if(index > this.length - 1)     return null
    const deletedIndex = this.data[index];

    for(let i = index; i < this.length - 1; i++)
        this.data[i] = this.data[i + 1];
    delete this.data[this.length - 1];
    this.length --;

    return deletedIndex;
  }

}

let myNewArray = new MyArray();

// push method
myNewArray.push(34);
myNewArray.push("orange");
myNewArray.push("black");
console.log(myNewArray);

// get method
// const res = myNewArray.get(0);
// console.log(res);

// pop method
// const response = myNewArray.pop();
// console.log(response);

// shift method
// const result = myNewArray.shift();
// console.log(result);
// console.log(myNewArray);

// delete By Index
const result = myNewArray.deleteByIndex(1);
console.log(result);
console.log(myNewArray);
