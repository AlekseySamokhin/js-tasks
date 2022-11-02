// Написать функцию которая преобразует массив users в объект типа { "1" : { id: 1, name: "Alex", cars: [ 1, 2, 3 ] }.
// То есть у нас должен быть объект:
// - ключами которого является id юзера;
// - массив cars внутри каждого юзера нужно заполнить id данных авто вместо названия;
// - важно чтобы оригинальный объект юзера был не изменен.

const users = [
    {
        id: 1,
        name: 'Alex',
        cars: ['audi', 'bmw', 'porshe']
    },
    {
        id: 2,
        name: 'Tony',
        cars: ['audi']
    },
    {
        id: 3,
        name: 'Jony',
        cars: ['lada', 'bmw', 'ford']
    },
    {
        id: 4,
        name: 'Brad',
        cars: ['mersedes', 'honda']
    }
]

const cars = {
    1: {
        id: 1,
        title: 'audi'
    },
    2: {
        id: 2,
        title: 'bmw'
    },
    3: {
        id: 3,
        title: 'porshe'
    },
    4: {
        id: 4,
        title: 'lada'
    },
    5: {
        id: 5,
        title: 'ford'
    },
    6: {
        id: 6,
        title: 'mersedes'
    },
    7: {
        id: 7,
        title: 'honda'
    },
}

function createObj(arr, obj) {
    const cloneArr = JSON.parse(JSON.stringify(arr));

    const objCars = {};

    for (let i = 0; i < cloneArr.length; i++) {
        objCars[cloneArr[i].id] = cloneArr[i];
    }

    for (let prop in objCars) {
        let {cars: arrBrands} = objCars[prop];

        for (let i = 0; i < arrBrands.length; i++) {
            for (let brand in obj) {
                const {id, title} = obj[brand];

                if (arrBrands[i] === title) {
                    arrBrands[i] = id;
                }
            }
        }
    }

    return objCars;
}

const formatedUsers = createObj(users, cars);

console.log(formatedUsers);
console.log(users[0].cars); // ['audi', 'bmw', 'porshe']