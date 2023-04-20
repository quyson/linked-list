class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  print = () => {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  };

  prepend = (data) => {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  };

  append = (data) => {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  };

  tail = () => {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    console.log(current.data);
  };

  at = (index) => {
    let current = this.head;
    let currentIndex = 0;
    while (current != null) {
      if (currentIndex == index) {
        return current.data;
      } else {
        currentIndex++;
        current = current.next;
      }
    }
  };

  pop = () => {
    let current = this.head;
    let previous = null;
    if (!current) {
      return "No elements in this linked list!";
    }

    if (current.next == null) {
      let data = this.head.data;
      this.head = null;
      size--;
      return `Removed first element: ${data}`;
    }

    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    size--;
    return `Removed last element: ${current.data}`;
  };

  contains = (value) => {
    let current = this.head;
    while (current != null) {
      if (current.data == value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  find = (value) => {
    let counter = 0;
    let current = this.head;
    while (current != null) {
      if (current.data == value) {
        return counter;
      } else {
        counter++;
        current = current.next;
      }
    }
    return "Not in the list";
  };

  toString = () => {
    let current = this.head;
    let string = "";
    while (current != null) {
      string = string + `(${current.data}) -> `;
      current = current.next;
    }
    string = string + "null";
    return string;
  };

  insertAt = (data, index) => {
    let counter = 0;
    let current = this.head;
    let previous = null;
    let newNode = new Node(data);
    if (index == 0) {
      newNode.next = this.head;
    }
    while (counter < index && current != null) {
      previous = current;
      current = current.next;
      counter++;
    }
    previous.next = newNode;
    newNode.next = current;
  };

  deleteAt = (index) => {
    if (index == 0) {
      this.head = this.head.next;
    }
    let previous = null;
    let counter = 0;
    let current = this.head;
    while (counter < index && current != null) {
      previous = current;
      current = current.next;
      counter++;
    }
    previous.next = current.next;
    current.next = null;
  };

  reverse = () => {
    let previous = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  };
}

let list = new LinkedList();
list.prepend(1);
list.append(2);
list.prepend(3);
list.prepend(5);
list.append("lol");
list.prepend("hi");
list.prepend("yo");

list.print();
list.reverse();
console.log("----------");
list.print();
