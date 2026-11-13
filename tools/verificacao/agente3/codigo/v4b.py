def serie(L, limite):
    while sum(L) < limite:
        L.append(sum(L))
    return L

print(serie([1], 20))
