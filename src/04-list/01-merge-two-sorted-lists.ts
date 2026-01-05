import ListNode from './00-list-implementation';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null && list2 === null) return null;

    const dummyHead = new ListNode();
    let ptr1 = list1;
    let ptr2 = list2;
    let ptr3 = dummyHead;

    while (ptr1 && ptr2) {
        if (ptr2.val > ptr1.val) {
            ptr3.next = new ListNode(ptr1.val);
            ptr1 = ptr1.next;
        } else {
            ptr3.next = new ListNode(ptr2.val);
            ptr2 = ptr2.next;
        }
        ptr3 = ptr3.next;
    }
    while (ptr1) {
        ptr3.next = new ListNode(ptr1.val);
        ptr1 = ptr1.next;
        ptr3 = ptr3.next;
    }
    while (ptr2) {
        ptr3.next = new ListNode(ptr2.val);
        ptr2 = ptr2.next;
        ptr3 = ptr3.next;
    }

    return dummyHead.next;
};

{
    // Input: list1 = [1,2,4], list2 = [1,3,4]
    const list1 = new ListNode(1,new ListNode(2, new ListNode(4)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    
    const output = mergeTwoLists(list1, list2);    // [1,1,2,3,4,4]
    output?.printList();
}

{
    // Input: list1 = [], list2 = []
    const list1 = null;
    const list2 = null;

    const output = mergeTwoLists(list1, list2);    // [0]
    output?.printList();
}

{
    // Input: list1 = [], list2 = [0]
    const list1 = null;
    const list2 = new ListNode(0);

    const output = mergeTwoLists(list1, list2);    // [0]
    output?.printList();
}
