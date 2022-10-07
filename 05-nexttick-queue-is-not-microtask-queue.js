const { nextTick } = require('node:process');

Promise.resolve(1).then(() => console.log('Microtask #1'));
nextTick(() => console.log('nextTick #1'));
Promise.resolve(1).then(() => console.log('Microtask #2'));
nextTick(() => console.log('nextTick #2'));
Promise.resolve(1).then(() => console.log('Microtask #3'));
nextTick(() => console.log('nextTick #3'));
Promise.resolve(1).then(() => console.log('Microtask #4'));
nextTick(() => console.log('nextTick #4'));
