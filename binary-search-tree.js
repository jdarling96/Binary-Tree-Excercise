class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, root = this.root) {
    if (this.root === null) {
      this.root = new Node(val);

      return this;
    }
    if (val > root.val) {
      if (root.right) {
        this.insertRecursively(val, root.right);
      } else {
        root.right = new Node(val);
        return this;
      }
    } else if (val < root.val) {
      if (root.left) {
        this.insertRecursively(val, root.left);
      } else {
        root.left = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    while(current){
      if(current.val === val) return current
      if(val < current.val){
        current = current.left
      }
      else if(val > current.val){
         current = current.right
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(!current) return undefined
    if(current.val === val) return current
    if(val < current.val) return this.findRecursively(val, current.left)
    else if(val > current.val) return this.findRecursively(val, current.right)

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, arr=[]) {
    arr.push(current.val)
    
    /* function traverseAndPush(current){
      arr.push(current.val)
      if(current.left) traverseAndPush(current.left)
      if(current.right) traverseAndPush(current.right)

    }
    traverseAndPush(current) */
    if(current.left) this.dfsPreOrder(current.left, arr)
    if(current.right) this.dfsPreOrder(current.right, arr)
    return arr
    


  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
