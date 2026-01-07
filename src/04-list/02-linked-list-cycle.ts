import ListNode from './00-list-implementation';

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};

{
    // Input: head = [3,2,0,-4], pos = 1 (denotes the index of the node that tail's next pointer is connected to)
    const node0 = new ListNode(0);
    const node2 = new ListNode(2, node0);
    const node4 = new ListNode(-4, node2);
    const head = new ListNode(3, node2);
    node0.addNext(node4);
    console.log(hasCycle(head));    // true
}

{
    // Input: head = [1, 2], pos = 0
    const head = new ListNode(1);
    const node2 = new ListNode(2, head);
    head.addNext(node2);
    console.log(hasCycle(head));
}

{
    // Input: head = [1], pos = -1
    const head = new ListNode(1); 
    console.log(hasCycle(head));   
}
