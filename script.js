class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class hashMap {
  constructor(buckets) {
    this.buckets = new Array(buckets).fill(null);
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
      curr = this.traverseLinkedList(curr, key);
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

    //Return immeidately if bucket is null
    if (curr === null) return null;

    //Check index
    this.checkIndexLength(index);

    curr = this.traverseLinkedList(curr, key);
    //if the key is found return the value of requested key, false otherwise
    if (curr.key === key) {
      return curr.value;
    } else {
      return null;
    }
  }

  // Return true if the requested key exists, false otherwise
  has(key) {
    let index = this.getIndex(key);

    let curr = this.buckets[index];

    this.checkIndexLength(index);
    curr = this.traverseLinkedList(curr, key);
    if (curr.key === key) {
      return true;
    } else {
      return false;
    }
  }

  //Remove request key and value
  remove(key) {
    let index = this.getIndex(key);
    let curr = this.buckets[index];
    this.checkIndexLength(index);
    let previous;

    this.checkIndexLength(index);
    //Check if first key = requested key
    if (curr.key === key) {
      curr = curr.next;
      this.buckets[index] = curr;
      return true;
    }

    while (curr.next !== null && curr.key !== key) {
      previous = curr;
      curr = curr.next;
    }

    if (curr.key === key) {
      //Remvoe specific key and return true
      previous.next = curr.next;
      return true;
    } else {
      return false;
    }
  }

  /*Helping method*/
  //Check if index is out of bound
  checkIndexLength(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  //Calculate hash code
  getIndex(key) {
    return this.hash(key) % this.buckets.length;
  }

  //Travel through linkedlist
  traverseLinkedList(curr, key) {
    while (curr.next !== null && curr.key !== key) {
      curr = curr.next;
    }
    return curr;
  }
}

const hashBucket = new hashMap(16);

/* Set example*/
hashBucket.set("Name", "Roy");
hashBucket.set("City", "Sydney");
hashBucket.set("Try", "Hard");
hashBucket.set("Dry", "Wet");
hashBucket.remove("Try");

// const temp = hashBucket.has("City");
// console.log(temp);
// hashBucket.hash();
console.log(hashBucket.buckets);
