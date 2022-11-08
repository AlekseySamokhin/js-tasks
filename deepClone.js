// 1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности)
// или массив (любой сложности и вложенности) или примитив. Функция должна вернуть то же самое что приняла
// аргументом, но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые).
// Функция не должна использовать хак с JSON.parse(JSON.stringify(data)).

function deepClone(data) {
    if (typeof (data) !== "object") return data;

    const cloneObj = Array.isArray(data) ? [] : {};

    for (let key in data) {
        cloneObj[key] = typeof (cloneObj[key]) === "object"
            ? deepClone(data[key])
            : data[key];
    }

    return cloneObj;
}

console.log(deepClone(1));
console.log(deepClone("Alexey"));
console.log(deepClone([1, 2, 3, 4, 5, 6]));
console.log(deepClone([1, 2, 3, 4, 5, [1, 2, 3, 4, 5, [1, 3, 4, 5, 6, 7]]]));
console.log(deepClone({name: "Alexey"}));
console.log(deepClone({1: {name: "Alexey"}}));