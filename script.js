class Node {
  constructor(head) {
    this.head = head;
  }
}

class hashMap {
  constructor() {
    this.bucket = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}

const exampleOne = new hashMap();

console.log("Example Below");
console.log(exampleOne.hash("Sara"));
