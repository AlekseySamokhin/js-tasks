// 3. Требуется создать функцию, получающую на вход число от 0 до 100 000 и показывающее его текстовый эквивалент.

function numToWord(num) {
    const ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",
        "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать",
        "семнадцать", "восемнадцать", "девятнадцать"];

    const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят",
        "девяносто"];

    const hundreds = ["", "cто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "cемьсот", "восемьсот", "девятьсот"];

    const numString = num.toString();

    if (num < 0) console.log("Отрицательные числа не поддерживается!");

    if (num === 0) return "ноль";

    // 1 - 20
    if (num < 20) {
        return ones[num];
    }

    // 21 - 99
    if (numString.length === 2) {
        return `${tens[numString[0]]} ${ones[numString[1]]}`;
    }

    // 100 - 999
    if (numString.length === 3) {
        if (numString[1] === '0' && numString[2] === '0') {
            return hundreds[numString[0]];
        } else {
            return `${hundreds[numString[0]]} ${numToWord(Number(numString[1] + numString[2]))}`;
        }
    }

    // 1000 - 9999
    if (numString.length === 4) {
        if (numString[1] === "0" && numString[2] === "0" && numString[3] === "0") {
            if (numString[0] === "1") {
                return "одна тысяча";
            } else if (numString[0] === "2" || numString[0] === "3" || numString[0] === "4") {
                if (numString[0] === "2") {
                    return "две тысячи";
                } else {
                    return `${ones[numString[0]]} тысячи`;
                }
            } else {
                return `${ones[numString[0]]} тысяч`;
            }
        } else {
            if (numString[0] === "1") {
                return `одна тысяча ${numToWord(Number(numString[1] + numString[2] + numString[3]))}`;
            } else if (numString[0] === "2") {
                return `две тысячи ${numToWord(Number(numString[1] + numString[2] + numString[3]))}`;
            } else if (numString[0] === "3" || numString[0] === "4") {
                return `${ones[numString[0]]} тысячи ${numToWord(Number(numString[1] + numString[2] + numString[3]))}`;
            } else {
                return `${ones[numString[0]]} тысяч ${numToWord(Number(numString[1] + numString[2] + numString[3]))}`;
            }
        }
    }

    // 10000 - 99999
    if (numString.length === 5) {
        if (numString[1] === "0" && numString[2] === "0" && numString[3] === "0" && numString[4] === "0") {
            if (numString[0] === "1" && numString[1] === "0") {
                return `${ones[10]} тысяч`;
            } else {
                return `${tens[numString[0]]} тысяч`;
            }
        } else if (Number(numString[0] + numString[1]) >= 10 && Number(numString[0] + numString[1]) <= 19) {
            if (numString[2] === "0" && numString[3] === "0" && numString[4] === "0") {
                return `${ones[Number(numString[0] + numString[1])]} тысяч`;
            } else {
                return `${ones[Number(numString[0] + numString[1])]} тысяч ${numToWord(Number(numString[2] + numString[3] + numString[4]))}`;
            }
        } else if (Number(numString[0] + numString[1]) > 19 && Number(numString[0] + numString[1]) <= 99) {
            if (numString[1] === "1") {
                return `${numToWord(Number(numString[0] + 0))} одна тысяча ${numToWord(Number(numString[2] + numString[3] + numString[4]))}`;
            } else {
                if (numString[2] === "0" && numString[3] === "0" && numString[4] === "0") {
                    return `${numToWord(numString[0] + numString[1])} тысяч`;
                } else {
                    return `${numToWord(Number(numString[0] + numString[1]))} тысяч ${numToWord(Number(numString[2] + numString[3] + numString[4]))}`;
                }
            }
        }
    }

    // 10000...
    if (numString.length === 6) {
        if(num === 100000) {
            return `${hundreds[1]} тысяч`
        } else {
            console.log("Числа больше 100 000 не обрабатываются!");
        }
    }
}

console.log(numToWord(9)); // => девять
console.log(numToWord(25)); // => двадцать пять
console.log(numToWord(153)); // => сто пятьдесят три
console.log(numToWord(441)); // => четыреста сорок один
console.log(numToWord(1530)); // => тысяча пятьсот тридцать
console.log(numToWord(7777)); // => семь тысяч семьсот семьдесят семь
console.log(numToWord(10211)); // => десять тысяч двести одинадцать
console.log(numToWord(22234)); // => двадцать две тысячи двести тридцать четыре
console.log(numToWord(99999)); // => девяносто девять тысяч девятьсот девяносто девять



