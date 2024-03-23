class Node {
  constructor(value, next = null) {
    this.value = value;
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
    let index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(value);
    } else if (this.buckets[index] !== null) {
      let curr = this.buckets[index];
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = new Node(value);
    }
  }
}

const hashBucket = new hashMap();

/* Set example*/

hashBucket.set("Age", 32);
hashBucket.set("Name", "Naja");
hashBucket.set("Name", "God");
hashBucket.set("Name", "Zin");

hashBucket.set("Number", 5555);

console.log(hashBucket.buckets);
