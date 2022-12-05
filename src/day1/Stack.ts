type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (!this.length) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        } else {
            const head = this.head;
            this.head = this.head?.next;
            return head?.value;
        }
        this.length--;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
