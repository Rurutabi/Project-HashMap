class Node {
  constructor(head, next = null) {
    this.head = head;
    this.next = next;
  }
}

class hashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
  }

  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key) % 16;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    console.log(index);

    if (this.buckets[index] === null) {
      this.buckets[index] = value;
    }

    console.log(this.buckets[index]);
  }
}

const hashBucket = new hashMap();

/* Set example*/

hashBucket.set("Age", 32);
hashBucket.set("Name", "Zin");
hashBucket.set("Number", 5555);

console.log(hashBucket.buckets);
