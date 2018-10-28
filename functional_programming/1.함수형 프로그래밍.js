/**
 * 함수형 프로그래밍
 * 읿급함수의 개념과 순수함수의 특성으로 함수를 조합해나가는 프로그래밍
 * 동일한 입력, 인자를 주었을때 항상 같은 출력, 결과를 리턴하는 불변하는 함수를 값으로 조합하여 로직을 짜는 프로그래밍
 * */


/* add_maker */

function add_maker(a) {
    return function(b) {
        return a + b;
    }
}

var add10 = add_maker(10);
/**
 var add10 = function(b){
  return 10 + b;
}
*/
console.log(add10(20));
console.log(add10(5));
console.log(add10(15));

var add15 = add_maker(15);

console.log(add15(15));

function f4(f1,f2,f3){
    return f3(f1() + f2());
}
console.log(
    f4(
        function () {return 2;},
        function () {return 1;},
        function (a) {return a * a;}));