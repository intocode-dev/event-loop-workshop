const { nextTick } = require('node:process');

Promise.resolve(1).then(() => console.log('Microtask later'));
nextTick(() => console.log('nextTick first'));
