// map:: Ma -> (a -> b) -> Mb
const map = (Ma) => f => {
  return Ma._of(f(Ma._get()));
};

//flatten:: MMa -> Ma
const flatten = (MMa) => {
  if(MMa._isMonad && MMa._get()._isMonad) {
    return MMa._get();
  }
};

const Monad = (sideEffect) => {
  //of:: a -> Ma
  const of = (a) => {
    const res = sideEffect ? sideEffect(a) : a;
    return {
      _get: () => res ? res : a,
      _isMonad: true,
      _of: of
    };
  };
  return of;
};

//compose:: (a -> Mb) -> (Mb -> (b -> Mc) -> MMc) -> (MMc -> Mc) -> (a -> Mc)
const compose = (f) => (map) => (g) => (flatten) => {
  //flatMap
  return a => flatten(map(f(a))(g));
};

const monadicCompose = (f) => (g) => {
  return compose(f)(map)(g)(flatten);
}

module.exports = { map, flatten, Monad, compose, monadicCompose };
