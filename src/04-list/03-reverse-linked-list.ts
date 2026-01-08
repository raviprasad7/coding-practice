import ListNode from './00-list-implementation';

function reverseList(head: ListNode | null): ListNode | null {
	if (head === null || head.next === null) return head;

	let prev = null;
	let curr: ListNode | null = head;
	let next: ListNode | null = head.next;

	while (curr && next) {
		curr.next = prev;

		prev = curr;
		curr = next;
		next = next.next;
	}

	curr.next = prev;

	return curr;
}

{
	const node5 = new ListNode(5);
	const node4 = new ListNode(4, node5);
	const node3 = new ListNode(3, node4);
	const node2 = new ListNode(2, node3);
	
	const head = new ListNode(1, node2);
	head.printList();
	const reversed = reverseList(head);
	reversed?.printList();
}

{
	const head = new ListNode(1, new ListNode(2));
	head.printList();
	const reversed = reverseList(head);
	reversed?.printList();
}

{
	const head = new ListNode(1);
	head.printList();
	const reversed = reverseList(head);
	reversed?.printList();
}

{
	const head = null;
	const reversed = reverseList(head);
	reversed?.printList();
}