const { Monad, map, compose, flatten, monadicCompose } = require('./monad');

const M = Monad(a => console.log('### ', a));

const add2 = a => a + 2;

console.log('-------------- map ----------------');
console.log(map(M(3))(add2)._get());

const add3 = a => M(a + 3);
const mul5 = a => M(a * 5);

console.log('-------------- monadic compose (using exlplicit function) ----------------');
console.log(compose(add3)(map)(mul5)(flatten)(5)._get());

console.log('-------------- monadic compose (using derived function) ----------------');
console.log(monadicCompose(add3)(mul5)(5)._get());
