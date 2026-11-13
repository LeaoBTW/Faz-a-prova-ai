def h(n):
    if n <= 2:
        return n
    return h(n - 1) + 2 * h(n - 3)

print(h(6))
