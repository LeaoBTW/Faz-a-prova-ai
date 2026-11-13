#include <stdio.h>
int main(void) {
    // <<<
    int v[] = {5, 15, 25, 35, 45};
    int *p = v + 3;
    *p -= 5;
    int *q = p - 2;
    printf("%d %d %d %d\n", *p, *q, (int)(p - q), v[3]);
    // >>>
    return 0;
}
