// 1. Написать рекурсивную функцию возведения в степень. На вход принимать число и его степень,
// на выходе выдавать рассчитанное значение.

function pow(num, exp) {
    if(Number.isInteger(exp) && Number.isInteger(num)) {
        if (exp < 0) {
            return 1 / pow(num, -exp);
        } else if (exp === 0) {
            return num;
        } else if (exp === 1) {
            return num;
        } else {
            return num * pow(num, exp - 1);
        }
    } else {
        console.log("Число или степень не является целым числом!");
    }
};

console.log(pow(2, -2)); // => 0.25
console.log(pow(2, 0)); // => 2
console.log(pow(2, 1)); // => 1
console.log(pow(2, 2)); // => 4