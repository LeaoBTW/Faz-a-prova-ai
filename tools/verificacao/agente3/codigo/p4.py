def f(n):
    if n <= 1:
        return 1
    return n * f(n - 3)
print(f(8), f(7))
