let arr_lnt = parseInt(prompt('Nhap vao do dai cua mang'));
let array =[];
for (let i = 0; i < arr_lnt; i++) {
    array[i]=parseInt(prompt('Nhap vao gia tri phan tu '+i));
}
document.write(array.reverse());