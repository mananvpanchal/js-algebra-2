//id: a -> a
const id = a => a;

//compose: (b -> c) -> (a -> b) -> (a -> c)
const compose = g => f => (a => g(f(a)));

//map: F -> (a -> b) -> Fa -> Fb
const map = F => f => Fa => F(f(Fa()));

const Functor = (sideEffect) => (a) => {
  if(typeof sideEffect === 'function') {
    sideEffect(a);
  }
  return (Fa) => {
    if(Fa === undefined) {
      return a;
    } else if(typeof a === 'function') {
      return map(Functor(sideEffect))(a)(Fa);
    } else {
      throw new Error('Functor is not a type of function');
    }
  };
};

module.exports = { id, compose, map, Functor };
