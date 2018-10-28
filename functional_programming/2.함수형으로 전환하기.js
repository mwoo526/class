const fp = require('./js/fp');


// 1. curry

let add = fp.curry((a, b) => a + b);

let add30 = add(15)(15);
console.log('<curry>');
/**
 * 클로저 == 자신이 생성되었을때의 환경을 기억하는 함
 * fn == (a, b) => a + b;
 * add(10,10) -> arguments 가 2개 == fn(a,b)
 * add(15)(15) -> arguments 가 1개 == a에 15가 들어간 이후 소멸되는것이 아니라 기억,유지 후 다음 b에 15가 들어오면 fn 실행
 * */
console.log(add30); // 30
console.log(add(10, 10)); // 20

// 2. curryr

let sub = fp.curryr((a, b) => a - b);

let sub10 = sub(10);
console.log('<curryr>');
console.log(sub(10,0)); // 10
console.log(sub10(20)); // 20 - 10 = 10

// 3. get

    // 배열도 객체이다!
let users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
];


let users1 = users[0];
console.log('<get>');
/**
 * get()은 object의 인자에 해당하는 키의 값을 호출
 * */
console.log(fp.get(users1, 'name')); // ID
console.log(fp.get('name')(users1)); // ID


// 4. isObject

console.log('<isObject>');
console.log(fp.isObject(users)); // true
console.log(fp.isObject(fp.get('name')(users1))); // false

// 5. keys
console.log('<keys>');
console.log(fp.key(users1)); // ['id', 'name', 'age']


console.clear();
// 6. each
// 7. filter
console.log('<filter>');
/**
 * filter()는 첫번째 인자 배열, 두번째 인자 배열의 각 요소 를 인자를 갖는 함
 * */
console.log(fp.filter(users, (user) =>  user.age < 30));

// 8. map
console.log('<map>');
console.log(
    fp.map(
        fp.filter(users, (user) => user.age < 30),
        (user) => user.name
    )
);

// map, filter, get
console.log(
    fp.map(
        fp.filter(users, (user) => user.age < 30),
        fp.get('name')
    )
);


// 9. rest
console.log('<rest>');
console.log(fp.rest(users)); // 배열의 첫번째 요소를 자르고 나머지 값 출력

// 10. reduce
console.log('<reduce>');
console.log(fp.reduce([1,2,3,4], add, 1));
console.log(fp.reduce([1,2,3,4], add));


// reduce, map, filter, get
console.log(
    fp.reduce(
        fp.map(
            fp.filter(users, (user) => user.id > 5),
            fp.get('age')
        ),
        add
    )
);