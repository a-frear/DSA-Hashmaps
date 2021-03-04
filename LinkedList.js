class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Constant Complexity O(1)
    insertFirst(data) {
      if (this.head === null) {
        this.head = new Node(data);
      } else {
        const oldHead = this.head;
        this.head = new Node(data, oldHead);
      }
    }
  
    // Linear Complexity O(n)
    insertBefore(data, beforedata) {
      if (this.head === null) {
        this.insertFirst(data);
      } else {
        let currentNode = this.head;
        let previousNode = this.head;
        while ((currentNode !== null) && (currentNode.data !== beforedata)) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previousNode.next = new Node(data, currentNode);
      }
    }
  
    // Linear Complexity O(n)
    insertAfter(data, afterdata) {
      if (this.head === null) {
        this.insertFirst(data);
        return;
      }
  
      let currentNode = this.head;
  
      while (currentNode.data !== afterdata && currentNode !== null) {
        currentNode = currentNode.next;
      }
  
      let after = currentNode.next;
      currentNode.next = new Node(data, after);
    }
  
    // Linear Complexity O(n)
    insertAt(data, position) {
      if (this.head === null) {
        this.insertFirst(data);
        return;
      }
  
      let counter = 0;
      let currentNode = this.head;
      let previousNode;
      while (counter !== position) {
        counter++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = new Node(data, currentNode);
    }
  
    // Linear Complexity O(n)
    insertLast(data) {
      if (this.head === null) {
        this.insertFirst(data);
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = new Node(data)
      }
    }
  
    // Linear Complexity O(n)
    remove(data) {
      if (!this.head) {
        return null;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let currentNode = this.head;
      let previousNode = this.head;
      while ((currentNode !== null) && (currentNode.data !== data)) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currentNode.next;
    }
  
    // Linear Complexity O(n)
    find(data) {
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      while (currentNode.data !== data) {
        if (currentNode.next === null) {
          console.log('Item not found');
          return;
        } else {
          currentNode = currentNode.next;
        }
      }
      return currentNode;
    }
  }
  
  class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  module.exports = { LinkedList, Node };