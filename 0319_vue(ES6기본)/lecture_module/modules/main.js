// import { name, age, greet } from './01_named_export.js';

// console.log(name);
// console.log(age);
// console.log(greet());

// 별칭
// import { name as userName, age as userAge } from './01_named_export.js';

// console.log(userName);
// console.log(userAge);

// 전부 가져오기
import * as utils from './01_named_export.js';

console.log(utils.name);
console.log(utils.age);
console.log(utils.greet());

// default -export
import addFunction from './02_default_export.js';

console.log(addFunction(4, 5));

import { name, age, greet } from './03_exports.js';
console.log(name);
console.log(age);
console.log(greet());
