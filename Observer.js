/*
*简单的
*/
var Subject = {
  handlers: [],
  subscribe: function (fn) {   
      this.handlers.push(fn);
  },
  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(
      function(item) {
          if (item !== fn) {
              return item;
          }
      }
  );
  },
  fire: function (arg, thisObj) {
      var scope = thisObj || window;
      this.handlers.forEach(function(item) {
          item.call(scope, arg);
      });
  }
};

var consoleHandler = function(e) {
  console.log(e + '\n');
}

var alertHandler = function(e) {
  alert(e + '\n');
}

Subject.subscribe(consoleHandler);
Subject.subscribe(alertHandler);
Subject.fire('3223');
Subject.fire('1111');

/*
*仿造的
*/

var EventBus = {
    handlers: {},
    on: function(eventName,callback){
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
          }
          this.handlers[eventName].push(callback)
    },
    off: function(eventName){
        if(this.handlers[eventName]) {
            delete this.handlers[eventName]
        }
    },
    emit: function(eventName,data = null){
        this.handlers[eventName].forEach(function(item) {
            item(data);
        })
    }
}

EventBus.on("alia", function(){
    console.log('触发1')
});

EventBus.off("alia");

EventBus.on("alia", function(){
    console.log('触发2')
});

EventBus.emit("alia");

// 高级版，需要封装成class，并且解绑

class Event {
    constructor() {
        this.subjects = []
    }
    on(key, callback) {
        if(this.subjects[key]) {
            this.subjects[key].push(callback)
        } else {
            this.subjects[key] = [callback]
        }
    }
    emit(key,data) {
        this.subjects[key].forEach((item) => item(data))
    }
    off(key) {
        if(this.subjects[key]) {
            delete this.subjects[key]
        }
    }
}