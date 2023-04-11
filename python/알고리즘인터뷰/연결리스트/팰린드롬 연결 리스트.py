class Node:
    def __init__(self,data) -> None:
        self.data = data
        self.next = None

    def __str__(self):
        return f'{self.data}'
    
import collections
def isPalindrome(head):
    q = collections.deque()

    if not head:
        return True
    
    node = head
    while node is not None:
        q.append(node.data)
        node = node.next

    while len(q)>1:
        if q.popleft() != q.pop():  
          return False
    
    return True


def isPalindromeByRunner(head):
    rev = None
    fast = slow = head

    while fast and fast.next:
        fast = fast.next.next
        rev,rev.next,slow = slow,rev,slow.next

        
    if fast:
        slow = slow.next
    
    while rev and rev.data == slow.data:
        rev = rev.next
        slow = slow.next

    return not rev


inputNode = Node(1)
inputNode.next = Node(2)
inputNode.next.next = Node(2)
inputNode.next.next.next = Node(1)

print(isPalindrome(inputNode))


