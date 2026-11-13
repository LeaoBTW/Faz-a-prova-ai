#include <stdio.h>
// <<<
void f(int a, int *b, int c[]) {
    a = 0;
    *b = 0;
    c[0] = 0;
    c = NULL;
}

int main(void) {
    int x = 1, y = 2, z[2] = {3, 4};
    f(x, &y, z);
    printf("%d %d %d %d\n", x, y, z[0], z[1]);
    return 0;
}
// >>>
