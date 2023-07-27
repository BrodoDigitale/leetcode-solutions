class EventEmitter {
  constructor() {
      //map is good data structure to store array of functions for each evt
      this.events = new Map();
  }
  subscribe(event, cb) {
    //if event does not exist create it
    if(!this.events.has(event)){
        this.events.set(event, [])
    }
    const listeners = this.events.get(event);
    listeners.push(cb);
      
    return {
        unsubscribe: () => {
           listeners.shift();
        }
    };
  }

  emit(event, args = []) {
      if(this.events.has(event)) {

          const listeners =  this.events.get(event);
          return listeners.map(f => f(...args));

      } else {

          return [];

      }
      
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */