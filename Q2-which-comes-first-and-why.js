// Which comes first? Replace /* */ with number 1-6

const { nextTick } = require('node:process');

const main = () => {
  console.log(/* */);

  Promise.resolve().then(() => nextTick(() => console.log(/* */)));

  setImmediate(() => console.log(/* */));
  nextTick(() => console.log(/* */));
  setTimeout(() => console.log(/* */), 0);

  console.log(/* */);
};

setTimeout(main, 0);
