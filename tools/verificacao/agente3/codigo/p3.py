class A:
    cont = 0
    def __init__(self):
        A.cont += 1
        self.id = A.cont
class B(A):
    def __str__(self):
        return f"B{self.id}"
a = B(); b = A(); c = B(); d = A()
print(c, A.cont, isinstance(b, B))
