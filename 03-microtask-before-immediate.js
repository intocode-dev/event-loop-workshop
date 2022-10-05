setImmediate(() => console.log('setImmediate later'));
Promise.resolve(1).then(() => console.log('Microtask first'));
