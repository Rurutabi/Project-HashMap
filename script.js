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

  //Store linkedlist inside a bucket
  set(key, value) {
    let index = this.getIndex(key);

    this.checkIndexLength(index);

    //if selected bucket is still emoty
    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key, value);
      //if bucket is not empty
    } else if (this.buckets[index] !== null) {
      let curr = this.buckets[index];
      //The while loop stop when next = null or duplicate key
      while (curr.next !== null && curr.key !== key) {
        curr = curr.next;
      }
      if (curr.key === key) {
        curr.value = value;
      } else {
        curr.next = new Node(key, value);
      }
    }
  }

  //Get selected value from the bucket
  get(key) {
    let index = this.getIndex(key);

    let curr = this.buckets[index];

    console.log(curr);
  }

  /*Helping method*/

  //Check if index is out of bound
  checkIndexLength(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  getIndex(key) {
    return this.hash(key) % this.buckets.length;
  }
}

const hashBucket = new hashMap();

/* Set example*/
hashBucket.set("Name", "Naja");
hashBucket.set("Name", "Sira");

hashBucket.get("Name");

console.log(hashBucket.buckets);
