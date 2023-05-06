class MyCircularQueue:
    def __init__(self,k) -> None:
        self.q = [None] * k
        self.maxlen = k
        self.p1 = 0
        self.p2 = 0

    def enQueue(self,value):
        if self.q[self.p2] is None:
          self.q[self.p2] = value
          self.p2 = (self.p2+1) % self.maxlen
          return True
        else:
            return False