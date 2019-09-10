---
layout: post
title: "파이썬으로 구현한 이진탐색트리 소스코드"
---

```py
class Node:
    def __init__(self, data):
        self.data = data
        self.right = None
        self.left = None

    def __str__(self):
        return str(self.data)

class SearchTree:
    def __init__(self):
        self.root = None

    def insertElement(self, data):
        new_node = Node(data)
        if self.root == None:
            self.root = new_node
        
        node = self.root
        while True:
            pre_node = node
            if node.data > new_node.data:
                node = node.left
                if node == None:
                    node = new_node
                    pre_node.left = node
            elif node.data < new_node.data:
                node = node.right
                if node == None:
                    node = new_node
                    pre_node.right = node
            else: return

    def searchElement(self, data):
        node = self.root
        while True:
            if node.data > data:
                node = node.left
            elif node.data < data:
                node = node.right
            elif node.data == data:
                break
            else:
                return Node('탐색 결과 없음')
        
        return node

    def preorderTraversal(self, node):
        print(node, end=' ')
        if not node.left  == None : self.preorderTraversal(node.left)
        if not node.right == None : self.preorderTraversal(node.right)

    def inorderTraversal(self, node):
        if not node.left  == None : self.inorderTraversal(node.left)
        print(node, end=' ')
        if not node.right == None : self.inorderTraversal(node.right)
    
    def postorderTraversal(self, node):
        if not node.left  == None : self.postorderTraversal(node.left)
        if not node.right == None : self.postorderTraversal(node.right)
        print(node, end=' ')
```