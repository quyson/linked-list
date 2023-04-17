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
}

let list = new LinkedList();
list.prepend(1);
list.append(2);
list.prepend(3);
list.prepend(5);
list.append("lol");
list.prepend("fuck u");

list.tail();
list.print();
console.log(list.head);
