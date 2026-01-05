class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    printList () {
        let ptr = this as ListNode | null;
        let log = '';

        while (ptr) {
            log += ` -> ${ptr.val}`;
            ptr = ptr.next;
        }

        console.log(log.slice(4));
    }
}

export default ListNode;
