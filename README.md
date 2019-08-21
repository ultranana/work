# 前端技能总结运用
> 在面试和工作中遇到的问题，系统总结一下，温故而知新。学习虽然缓慢，但是一定会有收获。

## 前端技能 / CSS
---
### 移动端h5适配
适配的原理是有个基准，在视口大小改变的时候重新计算。
首先需要了解几个单位px，rm，rem，vw

1. px像素（Pixel）。像素px是相对于显示器屏幕分辨率而言的。
2. rem，相对于根元素(即html元素)font-size计算值的倍数。
3. em，相对于父元素字体大小，元素的非font-size属性用em的话，相对于自身font-size
4. vw，相对于视口的宽度，视口被均分为100单位的vw

像webpack里的postcss有postcss-px-to-viewport，可以将px转换为vw。

---
### 绝对定位
相对于什么定位？以及定位的基准是什么？

相对于第一个相对定位父元素进行定位。子元素的margin相对于父元素的border进行绝对定位。

---

### 居中定位

#### 水平居中
* 行内元素：text-align: center
* 块级元素：
  * margin: 0 auto;
  * 设父元素相对定位，子元素绝对定位，如果宽度固定，子元素left: 50%;margin-left: -(一半的宽度)，否则用transform
  * flexbox

#### 垂直居中
* 行内元素：设lineheight = height
* 块级元素：
  * 设父元素相对定位，子元素绝对定位，如果高度固定，子元素top: 50%;margin-top: -(一半的高度)，否则用transform
  * flexbox

#### 水平垂直居中
* 行内元素：text-align: center + 设lineheight = height
* 块级元素：
  * 设父元素相对定位，子元素绝对定位，如果宽度固定，子元素left: 50%;top: 50%;margin-left: -(一半的宽度);margin-top: -(一半的高度),否则用transform
  * flexbox

---

### 两列布局（左栏固定右栏自适应）
不做说明结构如下：
```
  <div class="parent">
    <div class="left">
      <p>left</p>
    </div>
    <div class="right">
      <p>right</p>
      <p>right</p>
      <p>right</p>
    </div>
  </div>
```
1. left固定宽度，左浮动；right增加margin-left
2. left固定宽度，左浮动；right设置overflow: hidden
3. 将right再包一层，class命名为right-wrapper；left固定宽度，左浮动；right-wrapper宽度100%，右浮动，margin-left是负left的宽度让元素回到上一层；right增加margin-left
5. flex（兼容性问题）
6. table
7. grid（兼容性问题）

ps：如果有层级不对的，可以用position:relative

那我们常见的还有两列等高布局，以上哪些是等高的呢？答案是5，6，7

手写一个两栏布局，头部吸顶，内容撑满整个页面。

---

### css动画
transition： 提供了从一种状态<b>过渡</b>到另一种状态的改变。
animation：则可以从不同关键帧上设置多个过渡点。

区别：
1. transition是要手动触发，经常是和js搭配使用。animation自动触发。

2. animation可以循环。

3. animation可以指定关键帧的变化。

---
### 超出部分省略号
单行文本省略号：
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
多行文本省略号（webkit浏览器或移动端的页面）： 
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
text-overflow:ellipsis;
```

最后还有一种方法，使用::after在最后一行显示...
但是可能出现字符被截断的场景，慎重使用。

> [CSS单行、多行文本溢出显示省略号](https://segmentfault.com/a/1190000009262433)

---

### flex布局
使用flex会使子元素的float，clear和vertical-align属性失效。但是可以使用绝对定位。

---

#### flex常用属性

容器属性
  + align-items
  + justify-content
  + flex-direction
  + flex-wrap
  + flex-flow(flex-direction和flex-wrap的简写)

项目属性
  + flex-grow
  + flex-basis
  + flex-shrink
  + flex(flex-grow，flex-shrink和flex-basis的简写)

  >flex默认（0 1 auto）flex: 1 (1 1 0) flex: none (0 0 auto) flex: auto (1 1 auto)

> [阮一峰的flex教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
---

### 圆点样式
画一个圆点里面有个数字，数字居中的样式。如果在圆点样式上增加display：flex，布局无法达到要求。正确写法是有一个父元素用作定位，里面在写一个元素用作圆点展示。

# 前端技能 / Javascript基础

### Typescript
Typescript是JavaScript的一个超集，它从本质上添加了可选的静态类型和基于类的面向对象编程
> [1. 5分支上手TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html)

> [2. 手册指南](https://www.tslang.cn/docs/handbook/basic-types.html)

> [3. 声明文件](https://www.tslang.cn/docs/handbook/declaration-files/introduction.html)

---

### Javascript / ES5/6/7
MDN 上提供了包括 JS 在内的前端基础知识的课程

> [1. 前端第一步](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps)

> [2. JavaScript 基础要件](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks)

3. JavaScript权威指南(第6版)

> [http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)

（MDN 上的 HTML 和 CSS 部分也可选择阅读。）

阮老师的ES6科普文章也值得阅读
> [Promise 对象](http://es6.ruanyifeng.com/#docs/promise)

> [async 函数](http://es6.ruanyifeng.com/#docs/async)

> [Class 的基本语法](http://es6.ruanyifeng.com/#docs/class)

> [class 的继承](http://es6.ruanyifeng.com/#docs/class-extends)

> [编程风格](http://es6.ruanyifeng.com/#docs/style)

---

### 设计模式
一句话概述：核心是理解原则，从模式中寻找匹配原则，从模式案例中学习解决问题的思路和技巧

原则
> [单一职责](https://www.cnblogs.com/TomXu/archive/2012/01/06/2305513.html)

> [开闭原则](http://www.cnblogs.com/TomXu/archive/2012/01/09/2306329.html)

> [里氏替换原则](http://www.cnblogs.com/TomXu/archive/2012/01/10/2310244.html)

> [接口隔离原则](http://www.cnblogs.com/TomXu/archive/2012/02/14/2330137.html)

> [依赖导致原则](http://www.cnblogs.com/TomXu/archive/2012/02/15/2330143.html)

常用模式
> [单例模式](https://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html)

> [观察者模式](https://www.cnblogs.com/TomXu/archive/2012/03/02/2355128.html)

> [适配器模式](https://www.cnblogs.com/TomXu/archive/2012/04/11/2435452.html)

> [组合模式](https://www.cnblogs.com/TomXu/archive/2012/04/12/2435530.html)

附：
> [目录](https://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html)

---

### 闭包的使用
闭包就是能够读取其他函数内部变量的函数。
也不一定是函数，可以通过调用某个函数访问内部变量的都是运用了js的闭包。
```
var log = (function() {
  var log = "";

  return {
      add: function(msg) { log += msg + "\n"; },
      show: function() { alert(log); log = ""; }
  }
})();
log.add("first");
log.show();
```
因为函数有返回值，且被保存下来。于是可以通过log.add访问私有变量。

思考:用闭包实现一个节流函数

> [跟着阮一峰老师学闭包](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

> [闭包面试题](https://www.cnblogs.com/lulubai/p/6016785.html)

> [闭包面试题详解](https://www.cnblogs.com/xxcanghai/p/4991870.html)

---

### & 和 && 和 || 的区别
a() && b() :如果执行a()后返回true，则执行b()并返回b的值；如果执行a()后返回false，则整个表达式返回a()的值，b()不执行；

a() || b() :如果执行a()后返回true，则整个表达式返回a()的值，b()不执行；如果执行a()后返回false，则执行b()并返回b()的值；

&是位运算符中（按位与）运算符。他还有几个兄弟姐妹，分别是|(按位或)、^(按位异或)、~ (按位取反)

位运算我理解为二进制升级版的运算。

思考：console.log(1&2);console.log(1&&2);console.log(1||2);请问对应输出？

> [C的位运算](http://blog.sina.com.cn/s/blog_60e96a410100mjd2.html)

---

### 作用域和作用域链
只有函数才能创建作用域。作用域链就是当函数访问一个变量时，便会形成一条作用域链。

---

### 原型和原型链
1. 每一个对象都具有属性__proto__(除了 null )，也写作[[prototype]]这是一个隐藏属性，可以称为隐shi原型。指向该对象的构造函数的原型。
2. 每个函数都有一个 prototype 属性，原型也是一个对象。
3. 当试图引用属性时，会先寻找TA自身属性，如果没有，则寻找TA.__proto__(constructor1.prototype),一层一层沿着__proto__查找下去。这种搜索轨迹称之为原型链。
4. 函数原型的constructor指向本身（所以prototype和constructor正相反）。

>[原型链](https://camo.githubusercontent.com/b8806bd76878881e7f843b0e77643aff26594ecf/687474703a2f2f3773626e62612e636f6d312e7a302e676c622e636c6f7564646e2e636f6d2f6769746875622d6a732d70726f746f747970652e6a7067)

> [js中__proto__和prototype的区别和关系](https://www.zhihu.com/question/34183746)

> [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

---

### 节流和防抖
防抖的原理是，在触发这个函数后要等待足够长的时间，函数才会真正执行。所以每调用一次函数，就重置setTimeout，直到setTimeout到时才会执行。

节流的原理是，在触发这个函数后一定时间内只能执行一次，且一定会执行一次。常见有两种实现方式，一种是setTimeout间歇性设值，通过判断值是true还是false决定是否执行函数。第二种是根据当前时间减去上次执行时间是否大于某值来判断是否执行函数。

[代码](https://github.com/ultranana/learn/blob/master/text.html)
> [对防抖和节流的使用场景解释很好](https://segmentfault.com/a/1190000002764479)

> [用电梯做的比喻很好理解](https://www.cnblogs.com/javascriptvue/p/9159759.html)

---
### 观察者模式和发布订阅模式

感觉就是，发布订阅模式有一个中介。观察者模式是紧密耦合的，而发布订阅模式是松散耦合的。

> [观察者模式vs发布订阅模式](https://juejin.im/post/5a14e9edf265da4312808d86)

> [观察者模式vs发布订阅模式2](https://molunerfinn.com/observer-vs-pubsub-pattern/#%E8%AE%A2%E9%98%85%E5%8F%91%E5%B8%83%E6%A8%A1%E5%BC%8F)

> [观察者模式跟发布订阅模式就是不一样](https://juejin.im/post/5af05d406fb9a07a9e4d2799)

> [手写一个发布订阅模式？](https://github.com/ultranana/learn/blob/master/Observer.js)

---
### js绑定事件的几种方式
1. 直接在DOM写事件
2. 直接在JS写事件
3. 监听回调

---

### for...in 和 for...of 
1. for...of是ES6新引入的特性, for...in是ES5新引入的特性。
2. for...in循环出的是key，for...of循环出的是value。
3. for...in以任意顺序循环一个对象的可枚举属性，for...of循环遍历一个可迭代对象。
4. for...of尽量循环数组，for...in尽量循环对象。

> [for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)

> [for...in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

---

### Object.keys()和Object.getOwnPropertyNames()
1. Object.keys()和Object.getOwnPropertyNames()都是返回对象自身属性组成的数组。
2. Object.keys()返回对象可枚举属性。和for...in顺序一样。

> array的length属性是自身属性。

> [Object.keys()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

> [Object.getOwnPropertyNames()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

---

### 可枚举和可迭代
可枚举属性是指那些内部 “可枚举（enumerable）” 标志设置为 true 的属性
正常情况下，enumerable默认为true，但是通过Object.defineProperty定义的属性，enumerable默认为false

可迭代协议是ECMAScript 2015的几个补充。
简单而言：可迭代对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性。

> [属性可枚举性和所有权](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)

> [可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)

---

### splice 和 slice 和 substring
slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
splice() 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
1. slice(begin, end) 返回值是一个含有提取元素的新数组（包含begin，但不包含end），不会影响原数组。
2. slice(begin, end) 参数用法，begin表示开始；end标志结束，省略会提取到末尾。可以是负数。如果是负数，表示从倒数第几位开始。
3. splice(start,deleteCount,item1)返回值是被删除的元素组成的一个数组。

总之： slice比较软弱一点，只能截取数组的某个片段。splice更具破坏性，功能也更强大一点，有增删改功能。

> [slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

> [splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

---

### 变量提升
定义： 函数及变量的声明都将被提升到函数的最顶部。

函数创建的两种方式函数声明和函数表达式，其优先级为函数声明大于函数表达式。函数声明被提升到最顶部。

注意：let和const不具备变量提升

```
function Foo() {
  getName = function () { console.log (1); };
  return this;
}
Foo.getName = function () { console.log (2);};
Foo.prototype.getName = function () { console.log (3);};

function getName() { console.log (5);}
var getName = function () { console.log (4);};


// 请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
```

### 冒泡排序，快速排序，插入排序
冒泡排序原理： 将最小的值冒到最前面，以此类推。

平均时间复杂度： O(n2)

快速排序：找出一个基准，然后将所有比他小的放在左边，所有比他大的放右边，然后递归。

平均时间复杂度： O(nlogn)


插入排序：将需要排序的元素插入一个已经排好序的数组里，直到查完所有元素为止。

平均时间复杂度： O(n2)

请手写快速排序

---

### 箭头函数和普通函数的区别
1. this指向。箭头函数本身没有this，箭头函数的this是依赖于所在函数的上下文，也就是从父作用域继承this。普通函数的this指向运行时调用其所在函数的对象。
2. 箭头函数没有原型，也不能作为构造函数。
3. 通过call或者apply调用箭头函数时，对this没有影响。
4. 箭头函数不能当做Generator函数,不能使用yield关键字。

> [箭头函数MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arrow_functions)

> [关于箭头函数this指向的疑问](https://github.com/ruanyf/es6tutorial/issues/150)

---

### Set和Map
Set类似于数组，但是成员值唯一，没有重复值。有add,delete,has,clear,size等方法。
Map类似于对象，但是“键”的范围不限于字符串。

---

### Proxy和Object.defineProperty的区别
1. Proxy是Object.defineProperty的加强版，defineProperty能实现的Proxy都能实现，它还有新的功能比如has，construct，apply

2. Proxy监听一个对象直接劫持，defineProperty需要遍历属性。

---

### Promise
异步操作。Promise.all()在所有对象都成功才触发成功，有一条失败即触发失败。Promise.race()在任意一个子对象返回后，父对象触发子对象的成功或失败。
```
new Promise(function(resolve,reject){
  resolve('test');
}).then(function(value){
  console.log(v + 1)
},function(err){
  console.log(err)
})
//会抛出错误
```
第二个参数和catch一样能捕获到Promise错误。但是第二个参数不能捕获到当前promise第一个参数爆出的错误。
```
new Promise(function(resolve,reject){
  resolve('test');
}).then(function(value){
  console.log(v + 1)
}).catch(function(err){
  console.log(err)
})
//会打印错误
new Promise(function(resolve,reject){
  resolve('test');
}).then(function(value){
  console.log(v + 1)
}).then(function(value){
  console.log(s + 1)
},function(err){
  console.log(err)
})
//会打印错误
```
思考：1、自己写一个Promise。2、自己写一个finally。3、自己写一个all

---

### async await
当调用一个 async 函数时，会返回一个 Promise 对象。
async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，等待表达式中的 Promise 解析完成后继续执行 async 函数并返回解决结果。

> [箭头函数MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

> [promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

> [async](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)

---

### js继承

假设子类Child继承父类Parent

#### 方法一： 原型链继承

核心思想：
```
Child.prototype = new Parent()
```

即直接修改原型链指向。

缺点：所有子类的实例都会共享父类的方法。

#### 方法二： 借用构造函数继承
核心思想：
```
function Child() {
  Parent.call(this)
}
```

即在子类中直接调用父类方法。

缺点：函数无法复用。

#### 方法三：组合继承
核心思想：
```
function Child() {
  Parent.call(this)
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
```

即将原型链继承和借用构造函数继承结合起来。

暂无缺点。

#### 方法四：原型式继承
核心思想：
```
function create(child) {
  function F() {}
  F.prototype = child;
  return new F();
}
```
ES5规范了原型式继承，新增Object.create()方法。

缺点：包含引用类型的属性会共享相应的值，和原型链一样。

#### 方法五：寄生继承
核心思想：
```
function create(child) {
  function F() {}
  F.prototype = child;
  return new F();
}
function createAnother(parent){
  var clone = create(parent);
  clone.sayHi = function() {
    alert('hi');
  }
  return clone
}
```

即是原型式继承的增强版，在内部自定义参数。

缺点：函数无法复用，和构造函数模式相似。

#### 方法六：寄生组合继承
核心思想：
```
function inherit(child, parent) {
  const prototype = create(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}
```

然后将组合继承的代码，如下
```
function Child() {
  Parent.call(this)
}
Child.prototype = new Parent()
Child.prototype.constructor = Child
```

修改为

```
function Child() {
  Parent.call(this)
}
inherit(Child,Parent)
```

解决了组合继承调用两次父类的小bug。

---

### 数据类型

js有六种原始数据类型：Undefined，Null，Number,Boolean,String,Symbol(es6新定义)

其他都是object。引用类型和基本类型的最大区别就是，基本类型拷贝时是开辟了一个新的内存，引用类型拷贝时是复制了指针。

---

### 类型判断

typeof：能分辨除了null之外的原始数据类型。也可以分辨function。typeof返回字符串，有六种可能：number，string，boolean，undefined，object，function
(注意typeof NaN是number,typeof null是object)

instanceof： 用来测试一个对象是否是另一个对象的实例。可以判断Undefined，Null，Number,Boolean,String

Object.prototype.toString.call()： 更精确,返回值形如[object string]。可以判断Undefined，Null，Number,Boolean,String原始数据类型，也可以判断Function，Date，Array，RegExp，Object等引用数据类型。

等号判断：由于undefined派生自null，因此null == undefined为true，如果需要判断是否为null，则需要全等运算符。

问：假设有个变量a，如何判断undefined？如何判断null？如何判断NaN？如何判断array？
1. typeof a === 'undefined',Object.prototype.toString.call(a) === '[object Undefined]'
a === undefined

2. Object.prototype.toString.call(a) === '[object Null]',a === null

3. isNaN(a)

4. Object.prototype.toString.call(a) === '[object Array]',Array.isArray(a)

> [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

> [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
---

### 单页面应用和多页面应用
单页面应用只有一个html入口，跳转页面只是替换内容。多页面应用由服务器转发。

> [前端你要知道的单页面应用和多页面应用](https://juejin.im/post/5a0ea4ec6fb9a0450407725c)

> [单页面应用和多页面应用](https://www.jianshu.com/p/4c9c29967dd6)
---

### 宏任务和微任务
首先理解事件循环

在执行时，不同的任务源会放到不同的任务队列里面。异步的任务会放到对应的任务栈，包括宏任务和微任务。事件循环的顺序是先执行全局，然后执行所有微任务，执行完微任务在看下一个宏任务，这样一直循环下去。

宏任务包括： script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。

微任务包含：process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)

请说出以下代码的输出：

```
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

> [事件循环机制](https://www.jianshu.com/p/12b9f73c5a4f)

> [宏任务微任务](https://segmentfault.com/a/1190000014940904)

---

### 柯里化函数
const A = (a,b,c) => {console.log(a + b + c); return a*b*c}实现_A(a,b,c)和_A(1,2)(3)和_A(1)(2)(3)一样的效果
```
function cherry (func, args) {
  var argLength = func.length;
  var argsCollections =  args || [];
  return function () {
    const currentArg = [].slice.call(arguments);
    [].push.apply(currentArg, argsCollections);
    if(currentArg.length < argLength) {
      return cherry.call(this, func, args)
    }
    return func.apply(this,currentArg)
  }
}
```

### new Class和Object.create()都做了什么
```
var obj={}; //新建一个空对象
obj.__proto__=Car.prototype //改变原型指向
Car.call(obj) //执行构造函数

Object.create =  function (o) {
    var F = function () {};//新建一个空函数
    F.prototype = o;//继承参数
    return new F();//实例化
};
```
---

### call和apply区别
功能是一样的，区别是传参的形式不一样。apply方法接受的是一个包含多个参数的数组，而call()方法接受的是若干个参数的列表。

如果没有bind，请用call和apply写一个bind

---

### 正则匹配
电话号码匹配/^1[3|5|7|8|]\d{9}$/

---

### js的内存机制和垃圾回收机制

js具有自动垃圾回收机制，垃圾回收通常采用的是标记清除方式。即除了环境变量和被环境变量引用的变量都打上标记，而之后再次被打上标记的则视为准备删除的变量。

为了优化内存占用，最好设置值为null来解除引用。

## 前端技能 / 框架 / React Native

### React Native入门

> [RN 官方文档](https://facebook.github.io/react-native/docs/0.30/getting-started.html)
其中必须学习的是 The Basics 和 Components（*IOS和*Android组件不用看）。

---

### 如何用RN实现一个简单的动画
首先，不建议在state里写动画。最好使用RN提供的Animated组件。

> [ReactNative入门 —— 动画篇（上）](http://www.cnblogs.com/vajoy/p/5299315.html)

> [React Native开发之动画(Animations)](https://blog.csdn.net/hello_hwc/article/details/51775696)
---

### react native是如何将js转化成native的
React Native会在一开始生成OC模块表，然后把这个模块表传入JS中，JS参照模块表，就能间接调用OC的代码。
相当于买了一个机器人（OC），对应一份说明书（模块表），用户（JS）参照说明书去执行机器人的操作。

---

### RN在安卓和IOS兼容问题
1. 安卓是overFlow：hidden，IOS是overFlow：visible，且overflow不可以设置。用到overflow的需要将元素拿出来和父元素保持同级。
2. 安卓lineHeight和IOS表现不一致，安卓会偏下。

---

### RN 绝对定位
RN绝对定位的元素不见了。原因是RN早期版本不支持zIndex，位于后面的元素index高于前面的元素，会覆盖前面的元素。因此绝对定位元素如果覆盖在前方元素上方，可以写在下方。
> [RN样式指南](https://github.com/doyoe/react-native-stylesheet-guide)

# 前端技能 / 框架 / React

### React入门
> [教程推荐官网文档](https://react-legacy.netlify.com/docs/installation.html)
其中必须学习的是 QUICK START 部分。
<!-- TODO ：react16--> 
<!-- ## 框架 / Beeswax
### UI组件：
WEB 端参考：
> [组件总览](https://fe-doc.corp.bianlifeng.com/WEB/Development/Components/Overview.html)
RN 端参考：
> [组件列表](https://fe-doc.corp.bianlifeng.com/MOBILE/Component/RNBiz/index.html)
### 工具类：
RN 端参考：
> [通用方法](https://fe-doc.corp.bianlifeng.com/MOBILE/API/RNXUtil/index.html) -->
推荐阅读：

>[native和react native 通信](https://facebook.github.io/react-native/docs/communication-ios)
>[React Native for Android 原理分析与实践](https://juejin.im/post/5a6460f8f265da3e4f0a446d)
>[v8入门](https://v8.dev/docs/embed)

<!-- ## 框架 / React Native／RNPlus

推荐阅读 RNPlus 文档：https://fe-doc.corp.bianlifeng.com/MOBILE/API/RNPlus/index.html，其中必须学习的是 核心API 和 Router部分。 -->

---

### react 如何实现子组件向父组件传值
父组件可以通过props向子组件传值。子组件也可以通过调用props函数传参。
如果兄弟传值或者层级太深，需要用context传值。

> [react组件间通讯](http://taobaofed.org/blog/2016/11/17/react-components-communication/)

---

### react setState
1. 不可以直接修改this.state，而是调用this.setState，因为this.state有可能被this.setState的值覆盖。
2. setState后立即调用this.state不能保证获取到想要的值。这是因为是setState是一个异步操作，setState不会立即改变state的值，而是放到栈里，在合适的时候批量执行。如果实在想取，可以在setState回调函数里进行操作。
3. 一般来说setState每次都会造成渲染，如果是不必要的渲染可以通过在shouldComponentUpdate或者pure component来解决这个问题。

> [为什么setState是异步的](https://note.youdao.com/)

---

### react diff
1. tree diff。两棵树只会对同一层次的节点进行比较。
2. component diff。不是同一组件，则替换当前组件（删掉重建）。是同一个组件，则按照1继续执行比较。tip：React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。
3. element diff。允许开发者对同一层级的同组子节点，添加唯一 key 进行区分。
> [不可思议的react diff](https://zhuanlan.zhihu.com/p/20346379)

---

### react生命周期

[此图理解即可](https://www.cnblogs.com/qiaojie/p/6135180.html)

---

### 高性能react组件
React的性能瓶颈主要出现在生成DOM及DOM Diff的过程。
1. 子组件执行 shouldComponentUpdate 方法，自行决定是否更新（PureRenderMixin）
2. 给列表中的组件添加key属性
3. 尽量不要在render方法中bind或者写一个箭头函数。因为每次render都会重新创建一个新的匿名函数。可以分成一个组件。
4. 使用解构props和state声明变量，减少路径过长的引用。因为每一次“.”都代表了一次内存查找
5. 对于没有state的组件，使用纯函数写法。官方建议写法，渲染更快（猜测是因为没有生命周期）
6. ListView加快渲染速度。将initialListSize和pageSize设为1，减少ListView第一时间要渲染的组件个数
7. 使用immutable.js解决复杂数据diff、clone等问题。

---

### react高阶组件 
高阶组件的原理是一个函数，它接受一个函数，返回一个被加工过的函数
```
function ppHOC(WrappedComponent) {  
  return class PP extends React.Component {    
    render() {      
      return <WrappedComponent {...this.props}/>    
    }  
  } 
}
```

>[深入理解 React 高阶组件](https://zhuanlan.zhihu.com/p/24776678)

>[使用 高阶组件优化你的代码](https://segmentfault.com/a/1190000004598113)

思考： 什么时候用高阶组件？
在登陆或者权限校验的时候

---

### react16 新增功能
  1. 新增几个生命周期
  getDerivedStateFromProps 在页面渲染之前调用，返回一个对象用来更新state，替换了componentWillMount/componentWillReceiveProps
  getSnapshotBeforeUpdate 在渲染提交到dom之前调用，返回值最为第三个参数传给componentDidUpdate
  componentDidCatch 在后代组件抛出错误后被调用，在提交阶段被调用，允许副作用，因此可以记录一些错误信息
  getDerivedStateFromError 在在后代组件抛出错误后被调用，在渲染阶段被调用，不允许副作用

  <!-- 2. 新增几个hooks -->

> [官网文档](https://reactjs.org/docs/react-component.html)

---

### redux 原理
redux三大原则
1. 整个应用只有一个store，用来存储state
2. State 是只读的，唯一改变 state 的方法就是触发 action
3. 使用纯函数来执行修改

redux设计思想
1. Web 应用是一个状态机，视图与状态是一一对应的。
2. 所有的状态，保存在一个对象里面。

redux提供方法
1. createStore,
2. combineReducers,
3. bindActionCreators,
4. applyMiddleware,
5. compose,
6. __DO_NOT_USE__ActionTypes

createStore提供方法，以及各自作用
1. dispatch,
2. subscribe,
3. getState,
4. replaceReducer,

> [redux中文文档](https://cn.redux.js.org/)

> [redux源码解析](https://segmentfault.com/a/1190000007092130)

> [redux源码](https://github.com/reduxjs/redux/blob/master/src/index.js)

> [跟着阮一峰老师入门redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

---

### react-redux
connect是什么？Provider是什么？

>[React-Redux 源码解析](https://imweb.io/topic/5a1154fcef79bc941c30d90b)

---

### redux-actions
> [redux-actions源码解读](https://www.cnblogs.com/ZSG-DoBestMe/p/5375647.html)

---

### react-router从入门到放弃
exact 表示严格匹配，否则path="./home"也会匹配path="./"。

hashHistory不管用？react-router 4.0之后API改变。

hashHistory和browserHistory区别？

hashHistory是监听window.location.hash的变化。

browserHistory是使用h5的history接口，需要后端配合。

> [幸好有stackoverflow](https://github.com/ReactTraining/react-router/issues/4752)

> [快速上手](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/quick-start.md)

## 前端技能 / 框架 / Vue

### vue入门
1. computed是计算属性。watch是监听器。两者都是属性，不是函数。当有复杂计算逻辑时，请使用computed，尽量不要放在html里。
computed 是怎么获取依赖的
2. 生命周期重要，理解created，mounted，updated，destroyed。created时候实例已经创建，基本数据观测，属性和方法的运算等已经完成，但是$el 属性仍不可见。mounted时候$el为真实的dom元素。
3. class可以是对象语法，也可以是数组语法。
4. 注意data属性有引用类型的值时，直接采用下标修改的方式不能引起刷新，正确做法是Vue.set或者返回一个新的对象，也可以主张采用splice等方法，这些原生方法经过包裹可以触发刷新。
> [vue文档](https://cn.vuejs.org/v2/guide/class-and-style.html)

---

### vue 父子之间如何传参
1. props传参
2. $emit 事件向父级组件发送消息
3. vuex
4. $refs 获取子组件实例，向子组件传参数

---

### vuex

1. state。所有state保存在一个store里面。

2. getter。类似computed的作用

3. mutation。更改state唯一方式。但是mutation属性作用是注册事件，调用事件需要触发store.commit('xxx')。另外mutation必须是同步函数。

4. action。action是可以进行异步的调用，他提交的是mutation。使用方法和mutatoin类似通过触发store.dispatch('xxx')来调用。

5. module。module将store分割成模块。

> [vuex 文档](https://vuex.vuejs.org/zh/installation.html)


# 前端技能 / 框架 / 微信小程序

### 小程序如何阻止弹框遮罩层后页面内容的滚动
如果弹框不滚动，在弹框容器添加catchtouchmove阻止事件冒泡就能阻止滚动穿透。为什么需要阻止事件冒泡，因为小程序的元素都被包在page元素中，而小程序page的滚动往往是由冒泡事件触发，因此阻止了冒泡事件的传递也就相当于阻止了滚动

如果小程序滚动，需要动态将背景添加fixed定位，但是这样做会自动回到page顶部。

---

### app分享图片到朋友圈
app分享图片到朋友圈出现无法跳转的场景。经过实验，发现这是由于图片地址不是https。

---

## 小程序 父子之间如何传参
1. 数据绑定
2. 通过事件传递参数，triggerEvent
3. 都不行的话this.selectComponent获取子组件实例

---

## 前端技能 / 工具

### charles使用
前端常用抓包、限速、Mock工具。
开发必备。最重要的几个功能：
1. 抓取数据。如果是https请求，需要安装 Charles 的 CA 证书，然后在你需要抓取的请求上右击选择SSL proxy。手机如果要获取线上数据也要安装证书，并且在设置里信任。因为安装之后证书默认是不信任的。
2. moke数据，map本地数据什么的，最方便了。
3. 模拟慢速网络。点击上方的小乌龟。
> [Charles安装与使用](http://www.cnblogs.com/chars/p/5014772.html)
>[官方文档](https://www.charlesproxy.com/documentation/)

---

### git
git学好，能让你在很烦躁的代码提交中，不会因为错误操作，让自己更加烦躁。入门
> [git入门篇](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

> [玩游戏学git](http://learngitbranching.js.org/)

> [git简易指南](http://www.bootcss.com/p/git-guide/)

> [命令行使用教程](https://git-scm.com/book/zh/v1)

---

### webpack入门
webpack是一个静态模块打包器。
五个概念：
1. 入口(entry)
2. 出口(output)
3. loader。可以将非js文件打包成js模块。比如css，vue，图片，字体文件等等。
4. 插件(plugins)。提供拓展性的功能。
5. 模式。

 --save-dev？生产环境和开发环境？

hot和inline有啥不一样？分包？？vendors？打包后文件太大了？什么时候
> [hot和HMR区别](https://juejin.im/post/593e5454a0bb9f006b59d85a)

> [webpack文档](https://www.webpackjs.com/concepts/)

> [webpack手把手教学](https://www.jianshu.com/p/42e11515c10f)

> [Webpack 配置文件](https://juejin.im/entry/59c346776fb9a00a664a2aa1)

> [webpack多页面构建](https://github.com/shaozj/blog/issues/11)

> [webpack多页面应用专题以及注意项](https://array_huang.coding.me/webpack-book/)

> [webpack中英双语版](https://fakefish.github.io/react-webpack-cookbook/Introduction-to-Webpack.html)

> [webpack使用优化](http://www.alloyteam.com/2016/01/webpack-use-optimization/)

---

### IDE（vscode）
推荐使用全免费的Visual Studio Code作为主力开发IDE，官方文档：https://code.visualstudio.com/docs

其中基础编辑、代码导航为重点章节，需要掌握常用快捷键使用

---

### Chrome DevTools
无论浏览器还是RNX调试，甚至小程序调试都会用到Chrome DevTools，可谓是前端开发必知必会的首选调试工具。

官方文档：https://developers.google.com/web/tools/chrome-devtools/ （可能需要翻墙）

必知小技巧：https://www.imooc.com/article/2559

---

### Charles

>[中文简要教程](https://blog.csdn.net/liuwkk/article/details/81258522)

---

### 工具 / Postman
>[官方教程](https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates/)

>[调试技巧](https://blog.csdn.net/qq_14920635/article/details/81385050)

---

### 工具 / ESLint/TSLint
>[ESLint官方文档](https://eslint.org/docs/user-guide/getting-started)

>[TSLint官方文档](https://palantir.github.io/tslint/usage/cli/)

<!-- beeswax代码风格规则定义：https://fe-doc.corp.bianlifeng.com/BASIC/code-style.html -->


## 前端技能 / 其他

### 进程和线程
1. 线程是操作系统进行资源调度的最小单位。
2. 进程是一个任务，一个过程。操作系统为每个进程分配独立的空间。

---

### mvc,mvp和mvvm
以上三种软件设计模式的区别是什么呢？

mvc全名是Model-View-Controller。model是数据，view是视图，controller是控制器。用户更新controller，controller控制model，model更新视图。个人认为react是View。
![mvc](https://www.runoob.com/wp-content/uploads/2014/08/MVC1.png)


mvp全名是Model-View-Presenter。它将controller改为Presenter。view和model之间的通信是通过Presenter来进行的。
![mvp](https://pic3.zhimg.com/80/ffa885b9adc7f4dca8bfe674565e848c_hd.jpg)

mvvm全称是Model-View-ViewModel。主要特点是采用双向绑定。个人认为vue是mvvm。
![mvvm](https://pic3.zhimg.com/80/1d9336019baa5cabdf0e5e30b3effffb_hd.jpg)

---

### 首屏加速
为什么打开一个 H5 页面会有一长段白屏时间？因为它做了很多事情，大概是：

初始化 webview -> 请求页面 -> 下载数据 -> 解析HTML -> 请求 js/css 资源 -> dom 渲染 -> 解析 JS 执行 -> JS 请求数据 -> 解析渲染 -> 下载渲染图片

前端优化主要是： 
1. 降低请求量：合并资源，减少 HTTP 请求数，minify / gzip 压缩，webP，lazyLoad。
2. 加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。
3. 缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。
4. 渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。

> [移动 H5 首屏秒开优化方案探讨](https://blog.cnbang.net/tech/3477/)

> [DNS预加载](https://segmentfault.com/a/1190000000633364)

> [雅虎前端优化的35条军规](https://www.cnblogs.com/xianyulaodi/p/5755079.html)

> [使用window.performance监控网页性能](http://www.alloyteam.com/2015/09/explore-performance/4)

---

### 重排和重绘
触发重排的因素是几何因素的改变。包括1.页面第一次渲染 在页面发生首次渲染的时候，所有组件都要进行首次布局，这是开销最大的一次重排。 2.浏览器窗口尺寸改变 3.元素位置和尺寸发生改变的时候 4.新增和删除可见元素 5.内容发生改变（文字数量或图片大小等等） 6.元素字体大小变化。 7.激活CSS伪类（例如：:hover）。 8.设置style属性 9.查询某些属性或调用某些方法

触发重绘的操作主要是visibility、outline、背景色，字体颜色等属性的改变。

需要注意的是：重绘不一定导致重排，但重排一定会导致重绘。

---

### css和js放置顺序
一般我们将css放在head标签，js放在body尾部。为什么要这样呢？因为css放在body标签尾部时, <b>DOMTree构建完成之后便开始构建RenderTree</b>, 并计算布局渲染网页, <b>等加载解析完css之后, 开始构建CSSOMTree, 并和DOMTree重新构建RenderTree</b>, 重新计算布局渲染网页。css放在head标签中时, <b>先加载css, 之后解析css构建CSSOMTree, 于此同时构建DOMTree</b>, CSSOMTree和DOMTree都构建完毕之后开始构建RenderTree, 计算布局渲染网页。

对比两者, css放在head标签中比css放在body标签尾部少了一次构建RenderTree, 一次计算布局和一次渲染网页, 因此<b>性能会更好</b>; 并且css放在body标签尾部时会在网页中短暂出现<b>"裸奔"</b>的HTML, 这不利于用户体验。

---

### vue react 区别
1、模板不一样
2、diff原理不一样
3、数据绑定不一样
4. 生命周期和做的事情不一样

> [vue的diff原理](https://juejin.im/post/5affd01551882542c83301da)

> [react的diff原理](https://juejin.im/post/5affd01551882542c83301da)

> [个人理解Vue和React区别](https://juejin.im/post/5b8b56e3f265da434c1f5f76)

---

### 优化下拉刷新列表
1、分页请求，异步拼接
2、提前请求
3、图片懒加载
4、墓碑效果

> [设计无限滚动下拉加载](https://segmentfault.com/a/1190000008518315)

> [flatList部分原理](https://reactnative.cn/docs/flatlist/#extradata)

> [react native图片懒加载](https://www.jianshu.com/p/87465ce29b1e)

### 框架 / 数据流管理／Mobx
 
MobX 是一个响应式的数据流工具，将 React 自上而下的单向流动做了拆解，支持像 Vue 一样的命令式编程方式触发渲染。

其本身的实现思想是非常标准的 MVVM，且完成度很高。入门的话可以先看看这篇博客：核心概念，然后仔细阅读官方文档：https://cn.mobx.js.org/

推荐学习并掌握如下四个概念
observable
computed
observer
action
之后进行进阶学习：

>[源码解读：用故事解读 Mobx 源码系列](https://segmentfault.com/a/1190000013682735)

>[核心概念与动手实现](https://malcolmyu.github.io/2018/09/09/Core-Concepts-of-Mobx/)

---

### 框架 / 数据流管理／Redux
推荐阅读官网文档
>[介绍/动机](https://www.redux.org.cn/docs/introduction/Motivation.html)

>[介绍/核心概念](https://www.redux.org.cn/docs/introduction/CoreConcepts.html)

>[介绍/三大原则](https://www.redux.org.cn/docs/introduction/ThreePrinciples.html)

>[基础](https://www.redux.org.cn/docs/basics/)
<!-- 另外，公司项目中，RNPlus 内置了 Redux 并简化用法，我们还需要掌握在 RNPlus 下使用 Redux 的方法：https://fe-doc.corp.bianlifeng.com/MOBILE/API/RNPlus/redux/index.html。 -->

### 网络 / HTTP
题目范围：缓存、Cookie、同源策略、CORS

---

#### 同源策略和跨域

浏览器同源策略是指"协议+域名+端口"三者相同

跨域解决方案
1. jsonp。利用script标签可以跨域请求这一特点，动态创建script
2. 跨域资源共享（CORS）。简单请求时，浏览器会直接发送跨域请求。非简单请求时，浏览器会先发送一个预请求，服务器收到请求后设置Access-Control-Allow-Origin来判断是否允许跨域
3. ngnix转发

> 非简单请求在第一次预检（请求方法为OPTIONS）通过后，以后每次的请求就和cors请求一样。因为Win10浏览器已经自动将预检命令加入到缓存

> withCredentials前端设置支持cors请求携带cookie和http认证信息

>[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)

>[同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

>[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

>[前端常见跨域解决方案](https://segmentfault.com/a/1190000011145364)

---


#### http缓存
强缓存：强缓存是利用http头中的Expires和Cache-Control两个字段来控制的，如果没有过期，则不会与服务器进行通信，直接从缓存获取信息。如果已过期，则向浏览器发送请求。

协商缓存：协商缓存就是由服务器来确定缓存资源是否可用，如果服务器判断命中缓存，则返回304。

>[HTTP强缓存和协商缓存](https://segmentfault.com/a/1190000008956069)

---

### 前端缓存 cookie session 和 storage的区别
1. 传递方式方面，cookie在http请求头中携带，而session 和 storage仅保存在前端
2. 数据大小方面，cookie数据不能超过4k， session和storage则大得多
3. 有效期方面，cookie在设置过期时间内有效， session仅在当前浏览器关闭前有效，localStorage始终有效

---

### 网络 / SSL/TLS
>[SSL/TSL](http://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)

>[HTTPS](https://blog.csdn.net/qq_35642036/article/details/82788421)
题目范围：作用、HTTPS原理

---

### 网络 / Web Socket
了解：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket

https://www.infoq.cn/article/deep-in-websocket-protocol

mqtt：https://github.com/mcxiaoke/mqtt

<!-- 公司内部封装smq：Spork-MQ客户端使用手册 -->

划重点：websocket是什么，能帮我们做什么。如何使用smq。

---

### node 运用
常用模块
>[path模块](http://javascript.ruanyifeng.com/nodejs/path.html)

>[fs模块](http://javascript.ruanyifeng.com/nodejs/fs.html)

>[http模块](http://javascript.ruanyifeng.com/nodejs/http.html)

常用框架
>[express框架](http://javascript.ruanyifeng.com/nodejs/path.html)

>[koa框架](http://javascript.ruanyifeng.com/nodejs/koa.html)

---

### jsBridge 通信原理
一般js通过schema的形式通知native发生了变化，或者在webview页面里直接注入原生js代码

>[H5 与 Native 交互之 JSBridge 技术](https://juejin.im/post/599a58f6f265da247b4e756b)

>[react native之OC与js之间交互](https://github.com/xuwening/blog/blob/master/mdFile/react%20native%E4%B9%8BOC%E4%B8%8Ejs%E4%BA%A4%E4%BA%92.md)

>[JSBridge的原理](https://juejin.im/post/5abca877f265da238155b6bc)

---

### 网站攻击
原理
1. XSS攻击。XSS 将未经处理的代码直接在客户端执行，从而获取用户隐私的方式。比如在input和url里获取恶意脚本，未经处理直接执行。处理防止
1. CSRF攻击。CSRF 是一种劫持受信任用户向服务器发送非预期请求的攻击方式。通常是获取用户cookie发起伪造请求攻击服务器。

防范
1. XSS攻击主流浏览器已经内置了防范，如果进一步防范可以对用户输入输出进行过滤
2. CSRF可以通过验证码和token来防范。

>[浅说 XSS 和 CSRF](https://juejin.im/entry/5b4b56fd5188251b1a7b2ac1)

---

### babel原理（是如何将es6转成es5的）
过程：
1. 解析。使用babylon解析js语法，生成抽象语法树（AST）。
2. 转换。遍历AST并应用各plugin生成变换后的AST。
3. 生成。将AST输出为转码后的代码字符串

babel默认只转换js语法，而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy等。

核心包的概念：
+ babel-core：babel转译器本身，提供了babel的转译API，如babel.transform等。像webpack的babel-loader就是调用这些API来完成转译过程的。
+ babylon：js的词法解析器
+ babel-traverse：用于对AST的遍历，主要给plugin用
+ babel-generator：根据AST生成代码

功能包：
+ core-js：实现新的特性，高度模块化，可以按需引入。
+ babel-polyfill：shim（垫片），在全局环境引入新的API。包含core-js和regenerator-runtime这两个包。
+ babel-runtime：和pollyfill类似，但是不会污染全局作用域，可以用于library或plugin。
+ babel-plugin-xxx： 插件，可以定制需要的功能。
+ babel-preset-xxx： 转译的规则，是官方定义的一系列plugin的合集

>[babel官网](https://babeljs.io/)

>[阮一峰 babel](http://www.ruanyifeng.com/blog/2016/01/babel.html)

>[深入理解babel原理](https://www.jianshu.com/p/e9b94b2d52e2)

>[进阶学习 Babel 插件手册](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

>[如何配置好.babelrc](https://excaliburhan.com/post/babel-preset-and-plugins.html)

---

### 事件冒泡和捕获
首先搞懂几个概念

1. addEventListener

addEventListener方法有第三个参数,可以是useCapture(不兼容老浏览器)，表示在捕获阶段触发事件。或者options对象，可用参数capture为true表示在捕获阶段触发事件， once为true表示listener在添加之后最多只调用一次。passive为true表示listener永远不会调用preventDefault。

这里和事件流有关的参数有两个（
useCapture和capture），其实两者作用是一样的。

2. target和currentTarget的区别

target表示触发事件的元素，currentTarget表示绑定事件的元素。currentTarget是唯一的，而target具有不确定性。

3. 事件流

一个完整的事件流包括捕获阶段，目标阶段，冒泡阶段。捕获阶段从父元素向下传递，目标阶段如果既绑定冒泡阶段又绑定捕获阶段会触发两次事件，两次事件的优先级取决于代码中绑定事件的顺序。冒泡阶段从子元素向上传递。

addEventListener的useCapture默认为false，即浏览器默认情况下只触发冒泡事件。利用事件的冒泡特性，我们可以做很多事情，比如事件委托。

> 事件冒泡和捕获和dom树的结构有关，和样式无关。

---

### 阻止默认事件，阻止事件冒泡

1. event.stopPropagation()方法阻止事件冒泡

2. event.preventDefault()方法阻止默认事件

3. return false 同时阻止事件冒泡和默认事件

---

### http状态码

> 1xx：指示信息–表示请求已接收，继续处理。<br />
 2xx：成功–表示请求已被成功接收、理解、接受。<br />
3xx：重定向–要完成请求必须进行更进一步的操作。<br />
4xx：客户端错误–请求有语法错误或请求无法实现。<br />
5xx：服务器端错误–服务器未能实现合法的请求。

其中301表示永久重定向，302表示暂时重定向，304表示使用http缓存。
400表示请求格式错误，404找不到对应文件。

---

### 从输入url到页面展示都发生了什么
1. DNS解析，获取对应IP地址
2. 建立TCP连接，进行三次握手
3. 向服务端发送请求
4. 服务端接受响应
5. 页面渲染

> [详细解释](http://fex.baidu.com/blog/2014/05/what-happen/)

---

### POST和GET区别
1. GET请求的参数是放在URL里的，POST请求参数是放在请求body里的；
2. GET请求的URL传参有长度限制，而POST请求没有长度限制；
3. GET请求语义是读取指定的资源，是安全的，幂等的，可缓存的。POST请求是发出请求让服务器处理一件事，是有副作用的，不幂等的。

---

### TCP三次握手和四次挥手
关键词：

syn（建立连接）

ack（确认）

FIN（结束）

三次握手：

第一次握手：客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。

第二次握手：服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（seq=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；

第三次握手：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。

四次挥手：

第一次挥手：主动方发送一个FIN，用来关闭客户到服务器的数据传送。

第二次挥手：被动方收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。

第三次挥手：被动方关闭客户端的连接，发送一个FIN给客户端。

第四次挥手：客户端发回ACK报文确认，并将确认序号设置为收到序号加1。

---

### HTTP1.0、HTTP1.1 和 HTTP2.0 的区别

| http | 区别
| ------ | ------ | ------ |
| HTTP1.0	 | 无状态、无连接 
| HTTP1.1	 | 持久连接<br />请求管道化<br />增加缓存处理（新的字段如cache-control）<br />增加Host字段、支持断点传输等（把文件分成几部分）
| HTTP2.0	 | 二进制分帧<br />多路复用（或连接共享）<br />头部压缩<br />服务器推送

---

### 常用http header
Accept： 指定客户端能够接收的内容类型

Cache-Control： 指定缓存机制

Cookie： cookie值

Content-Type：请求体的MIME类型 

User-Agent： 发出请求的用户信息

---

### ngnix入门

### 新的position和新的display

### commonJS 和 ES6的模块 区别是什么

### BFC

### Grid布局

<!-- 如何将文件转成hash值 -->
