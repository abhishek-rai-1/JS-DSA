class MYArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const ans = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return ans;
  }

  shift() {
    const ans = this.data[0];

    for (let i = 0; i < this.length; i++) this.data[i] = this.data[i + 1];

    delete this.data[this.length - 1];

    this.length--;

    return ans;
  }

  deleteByIndex(index) {
    const ans = this.data[index];
    for (let i = index; i < this.length; i++)
      this.data[index] = this.data[index + 1];
    delete this.data[this.length - 1];
    return ans;
  }
}

const myNewArr = new MYArr();
myNewArr.push("apple");
myNewArr.push("mango");
myNewArr.push("orange");
myNewArr.push("lichi");
// console.log(myNewArr);

// const ans = myNewArr.get(2);

// const ans = myNewArr.pop();

// const ans = myNewArr.shift();

const ans = myNewArr.deleteByIndex(2);

console.log(ans);

console.log(myNewArr);
