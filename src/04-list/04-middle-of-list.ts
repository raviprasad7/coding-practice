import ListNode from './00-list-implementation';

function middleNode(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) {
		return head;
	}
    let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next!;
		fast = fast.next.next!;
	}

	return slow;
};

{
	// Input: [1,2,3,4,5]
	const node4 = new ListNode(4, new ListNode(5));
	const node2 = new ListNode(2, new ListNode(3, node4));

	const head = new ListNode(1, node2);
	const output = middleNode(head);
	output?.printList();	// [3, 4, 5]
}

{
	// Input: [1,2,3,4,5,6]
	const node4 = new ListNode(4, new ListNode(5, new ListNode(6)));
	const node2 = new ListNode(2, new ListNode(3, node4));

	const head = new ListNode(1, node2);
	const output = middleNode(head);
	output?.printList();	// [4,5,6]
}
