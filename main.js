let a = [1, 3, 4, 6, 7, 9, 23, 55];
let b = [2, 5, 8, 12, 29, 40, 58, 60];
let c = [];
let d = [];

for (i = 0; i < a.length; i++) {
    c.push(a[i], b[i]);
}
for (j = 0; j < c.length; j++) {
    for (i = 0; i < c.length - j - 1; i++) {
        if (c[i] > c[i + 1]) {
            d = c[i];
            c[i] = c[i + 1];
            c[i + 1] = d;
        }
    }
}
console.log(c);