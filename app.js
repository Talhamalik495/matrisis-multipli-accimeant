let matrix_1 = [[2, 5, 9, 8, 6], [5, 6, 7, 3, 7], [7, 9, 4, 9, 2, 5]]
let matrix_2 = [[4, 8, 6, 7, 3], [8, 7, 5, 7, 2], [8, 5, 6, 9, 7]]
let b = ("")
for (let i = 0; i < 3; i++) {
    b++;
    for (let j = 0; j < 5; j++) {
        console.log(matrix_1[i][j] * matrix_2[i][j])
    }
}
console.log(b);