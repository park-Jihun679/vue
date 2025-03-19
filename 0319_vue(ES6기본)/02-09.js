let obj = { result: 0 };

// JavaScript의 this 바인딩 문제
//  일반 함수는 호출될 때 전역 객체를 참조함.
/*
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner();
};
obj.add(3, 4); 
console.log(obj);
console.log(result);
*/

// 1. 화살표 함수
obj.add = function (x, y) {
  inner = () => {
    this.result = x + y;
  };
  inner();
};
obj.add(3, 4);
console.log(obj.result); // 7

// 2. bind()
// 함수의 this 값을 특정 객체에 영구적으로 바인딩한 새로운 함수 반환
// 첫번째 인자로 전달된 객체가 this로 
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner.bind(this)();
};
obj.add(3, 4);
console.log(obj);
console.log(result);
