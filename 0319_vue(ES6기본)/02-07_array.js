// 배열 구조 분해 할당

const animal = ['baer', 'tiger', 'giraffe', 'elephant', 'lion'];

// 1. 기본적인 구조분해 할당
// const [ani1, ani2, ani3] = animal;

// console.log(ani1, ani2, ani3);

// 2. 일부 요소 건너뛰기
const [, animal2, animal3, , animal5] = animal;

console.log(animal2, animal3, animal5);

// 3. 기본값 설정 (잘 안씀)
const zoo = ['panda', 'koala'];
const [ani1, ani2, ani3 = 'monkey', ani4 = 'penguin'] = zoo;
console.log(ani1, ani2, ani3, ani4);

// 4. 중첩된 배열 구조 분해

const nestedArray = [1, [2, 3], 4];

const [num1, [num2, num3], num4] = nestedArray;

console.log(num1, num2, num3, num4);
