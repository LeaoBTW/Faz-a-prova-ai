try:
    print("a", end="")
    x = int("15")
    print("b", end="")
    y = 10 / (x - 15)
    print("c", end="")
except ValueError:
    print("v", end="")
except ZeroDivisionError:
    print("z", end="")
else:
    print("d", end="")
finally:
    print("f")
