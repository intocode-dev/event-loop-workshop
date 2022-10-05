const fn1 = () => {
  console.log('fn1 in');
  fn2();
  console.log('fn1 out');
};

const fn2 = () => {
  console.log('fn2 in');
  fn3();
  console.log('fn2 out');
};

const fn3 = () => {
  console.log('fn3 in');
  setTimeout(() => console.log('setTimeout last because the Event Loop is blocked until all calls done'), 0);
  for (let i = 0; i < 100; i++) {
    console.log('fn3 counting', i);
  }
  console.log('fn3 out');
};

fn1();
