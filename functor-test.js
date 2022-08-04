const { id, compose, map, Functor } = require('./functor');

//-------- sample code --------------
const F = a => Functor((_a) => console.log('side effect',_a))(a);

const f = a => a + 1;
const g = a => a * 2;

//------------ testing ----------------
const Fid1 = F(id(1));
const idF1 = id(F(1));
console.log('id check: ', Fid1() === idF1());

const Fcom_g_f_F1 = F(compose(g)(f))(F(1));
const comFg_Ff_F1 = compose(F(g))(F(f))(F(1));
console.log('compose check: ', Fcom_g_f_F1() === comFg_Ff_F1());

//----------- imformal testing --------
// console.log('g(2) === F(g)(F(2))()', g(2) === F(g)(F(2))());
// console.log('f(2) === F(f)(F(2))()', f(2) === F(f)(F(2))());
console.log(F(g)(F(2))());
console.log(F(f)(F(2))());
