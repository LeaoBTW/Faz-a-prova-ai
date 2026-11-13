def registra(item, lista=[]):
    lista.append(item)
    return lista

a = registra("pix")
b = registra("ted")
c = registra("doc", [])
print(len(a), len(b), len(c), a is b)
