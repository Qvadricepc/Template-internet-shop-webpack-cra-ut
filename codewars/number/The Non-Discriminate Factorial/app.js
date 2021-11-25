function factorial(n) {
    let j=1;
    if (n === 0) {
        return 1
    } else if (n > 0) {
        for (i = 1; i <= n; i++) {
            j = j * i;
        }
        return j;
    } else if (n < 0) {
        for (i = 1; i <= Math.abs(n); i++) {
            j = j * i;
        }
        return -j;
    }
}

factorial(0)