class Node {
  constructor(key, value, next = null) {
    this.key = key;
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
    console.log(index);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    //if bucket is still emoty
    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key, value);
      //if bucket is not empty
    } else if (this.buckets[index] !== null) {
      let curr = this.buckets[index];
      //If first value is already existed but the key is different
      while (curr.next !== null && curr.value !== value) {
        curr = curr.next;
      }
      if (curr.value === value) {
        curr.key = key;
      } else {
        curr.next = new Node(key, value);
      }
    }
  }
}

const hashBucket = new hashMap();

/* Set example*/
hashBucket.set("Name", "Naja");
hashBucket.set("Name", "Sira");
console.log(hashBucket.buckets);
