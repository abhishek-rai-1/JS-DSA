class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (temp.left !== null && temp.right !== null)
      value > temp.data ? (temp = temp.right) : (temp = temp.left);

    if (temp.data === value) return undefined;
    else if (temp.left === null && temp.right === null && value < temp.data)
      temp.left = newNode;
    else if (temp.left !== null && temp.right === null && value > temp.data)
      temp.right = newNode;
    else temp.left = newNode;
  }

  Inorder(node = this.root, data = []) {
    if (node === null) return data;

    if(node.left)   this.Inorder(node.left, data);

    data.push(node.data);

    if(node.right)   this.Inorder(node.right, data);

    return data;
  }
}

const tree = new BST();
tree.insert(23);
tree.insert(13);
tree.insert(3);
tree.insert(83);
tree.insert(73);
console.log(tree.Inorder());
