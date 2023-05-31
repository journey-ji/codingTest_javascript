class BinaryTree:
    def __init__(self,item) -> None:
        self.data = item
        self.left = None
        self.right = None

    ## 총 노드 수 반환    
    def size(self):
        left = self.left.size() if self.left else 0
        right = self.right.size() if self.right else 0
        return l+r+1
    def insert(self,item):
        # 현재 값보다 크면, self.rigth에 삽입
        # 작으면, self.left에 삽입
        if item>self.data:
            if self.left != None:
                self.left.insert(item)
            else:
                self.left = BinaryTree(item)
            pass
        else:
            if self.right != None:  
                self.right.insert(item)
            else:
                self.right = BinaryTree(item)

    def __str__(self) -> str:
        # 전체 트리구조 불러오기 작업해주기,,
        # 문자열로 바꿔야돼ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ
        # 리스트에 넣자,,,,,,,,,,,,,,,,,
        # [3,254,5,,35,6,3,4,2,4]
        return str(self.data)
        
    

def maxDepth(root):
    return root



testTree = BinaryTree(3)
testTree.insert(9)
testTree.insert(2)
testTree.insert(1)
testTree.insert(7)
testTree.insert(11)
print(testTree)