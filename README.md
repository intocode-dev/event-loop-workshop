# Node.js Event Loop

## Facts

- The JavaScript part of Node.js is single-threaded
- `libuv` handles multi-threaded operations

## Phases

```mermaid
graph LR
classDef Phase fill:#FFFFFF,color:#333333
classDef Input fill:#FCFFB2,color:#333333
  P1[Phase 1: timers]:::Phase --> P2[Phase 2: pending callback]:::Phase
  P2 --> P3[Phase 3: idle, prepare]:::Phase
  P3 --> P4[Phase 4: poll]:::Phase
  P4 --> P5[Phase 5: check]:::Phase
  P5 --> P6[Phase 6: close callbacks]:::Phase
  P6 --> P1
  
  P1i(setTimeout, setInterval):::Input -..-> P1
  P4i(incoming connections, data, etc):::Input -..-> P4
  P5i(setImmediate):::Input -..-> P5
  P6i("fn.on('close', callback)"):::Input -..-> P6
```

- Each Phase has a FIFO queue of callbacks to execute

## nextTickQueue & MicrotaskQueue

- `nextTick` callbacks go into `nextTickQueue`
- `nextTickQueue` is not a part of the event loop
- `nextTickQueue` will be processed when the current operation completed. An _operation_ is defined as a transition from the underlying C/C++ handler, and handling the JavaScript that needs to be executed.
- All callbacks within `nextTickQueue` resolved before the event loop continues.
- `Promise` callbacks go into `MicrotaskQueue`
- `nextTick` and Microtask queues can be used in all phases

## Reference

- [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
