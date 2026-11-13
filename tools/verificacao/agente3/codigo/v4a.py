def acumula(L, n):
    while True:
        if len(L) >= n:
            return L
        else:
            L.append(len(L) * 3)

print(acumula([5, 1], 6))
