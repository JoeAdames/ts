class ListNode<T> {
    //store to the next node
    next?: ListNode<T>; //? means it can be undefined
    

    constructor(public value: T) {}
}

class LinkedList<T> {
    private root?: ListNode<T>; //private makes the logic private to the class
    private tail?: ListNode<T>
    private length = 0;

    add(value: T) {
        const node = new ListNode(value); //create a new node
        if (!this.root || !this.tail) { //if there is no root node or tail node
            this.root = node; //set the root node to the new node
            this.tail = node; //set the tail node to the new node
        } else { //if there is a root node
           this.tail.next = node; //set the next node to the new node
           this.tail = node; //set the tail node to the new node
         }
        this.length++ //increment the length
    }

    getnumberOfElements() {
        return this.length;
    }
     
    print() {
        let current = this.root; //start at the root node
        while (current) {
            console.log(current.value); //print the value of the current node
            current = current.next; //move to the next node
        }
    }
} 

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getnumberOfElements());
numberList.print();