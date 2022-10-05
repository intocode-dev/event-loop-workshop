console.log('global scope');

setTimeout(() => console.log('setTimeout callback run later'), 0);

for (let i = 0; i <= 10; i++) {
  console.log('before event loop', i);
}
