class Node {
  constructor(data, next = null) {
    (this.data = data), (this.next = next);
  }
}

class LinkedList {
  constructor(head) {
    (this.head = head), (this.size = 0);
  }
}
