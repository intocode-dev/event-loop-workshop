// timeout must be longer than the time taken from Timers phase to Check phase.
// Try put 0 here, setTimeout's callback will sometime run first

setTimeout(() => console.log('setTimeout, run later'), 10);
setImmediate(() => console.log('setImmediate, run now'));
