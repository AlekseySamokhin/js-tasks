// 2. Написать приложение, получающее массив с вложенными массивами
// и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.

function flat(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])) // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(flat([[[0], [1]], [[2], [3]], [[4], [5]]])) // => [0, 1, 2, 3, 4, 5];
console.log(flat([1, [2, 3], [4, 5, 6]])) // => [1, 2, 3, 4, 5, 6];