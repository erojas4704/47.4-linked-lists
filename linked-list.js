/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else if (this.tail) {
            this.tail.next = node;
        }

        this.length++;

        this.tail = node;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    /** pop(): return & remove last item. */

    pop() {
        let node = this.head;
        if (!node) return null;
        let previous;

        while (node) {
            previous = node;
            node = node.next;
            if (node === this.tail) {
                this.tail = previous;
            }
        }

        this.length--;
        return node;
    }

    /** shift(): return & remove first item. */

    shift() {
        let node = this.head;
        if (!node) return;

        this.head = this.head?.next;
        length--;
        return node;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        let i = 0;
        let node = this.head;

        while (node !== null) {
            if (i === idx) return node;
            else if (i > idx) return null;
            node = node.next;
            i++;
        }
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        let newNode = new Node(val);
        if (idx === 0) {
            newNode.next = this.head?.next;
            this.head = newNode;
        } else {
            try {
                let previous = this.getAt(idx);
                let next = this.getAt(idx + 1);
                previous.next = newNode;
                newNode.next = next;
                if (!newNode.next) this.tail = newNode;
            } catch (err) {
                console.error(`Could not insert into list at [${idx}]. Out of bounds`);
            }
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        let newNode = new Node(val);
        if (idx === 0) {
            newNode.next = this.head?.next;
            this.head = newNode;
            if (!newNode.next) this.tail = newNode;
        } else {
            try {
                let previous = this.getAt(idx - 1);
                let next = previous.next;
                previous.next = newNode;
                newNode.next = next;
                if (!next) this.tail = newNode;
            } catch (err) {
                console.error(`Could not insert into list at [${idx}]. Out of bounds`);
            }
        }
        this.length++;
    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {

        let previous = this.getAt(idx - 1);
        let next = previous?.next?.next;
        let node;

        if (idx === 0) {
            node = this.head;
            this.head = node?.next;
        } else {
            node = previous?.next;
        }


        if (node) {
            if (!node.next) this.tail = node;
            this.length--;
        }
        
        if (this.length - 1 < 1) {
            this.tail = null;
        }

        if (previous) previous.next = next;
        return node;
    }

    /** average(): return an average of all values in the list */

    average() {
        let node = this.head;
        let total = 0;
        let numNodes = 0;

        while (node) {
            numNodes++;
            if (node) total += node.val;
            node = node.next;
        }
        if (numNodes === 0) return 0;
        return total / numNodes;
    }
}

module.exports = LinkedList;
