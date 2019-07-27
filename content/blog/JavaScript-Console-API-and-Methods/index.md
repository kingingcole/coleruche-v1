---
title: JavaScript Console API and Methods
date: "2019-05-26T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: A dive into the methods on the JavaScript inbuilt console object.
published: true
altText: turned on wireless dualshock game controller
---

As a JavaScript engineer, I have used the `console.log()` method more times than [the number of people killed in Game Of Thrones up to the 7th season](https://winteriscoming.net/2017/10/26/30-minutes-or-less-watch-all-174373-deaths-in-game-of-thrones-seasons-1-7/) — well, maybe not that much.<br/>
The point, is that much like many other (newbie) JS coders, I pretty much knew `log()` as the only method on the JavaScript `console` object. 
>Yes, it is an object. 
>You can verify this by opening up your browser console and running `typeof(console)` and you should get “object” returned back. 

Now that we have proven it is an object, like all other objects, it has many other methods in it apart from `log()`. 

“Why is it so important knowing these other methods?”, you may ask. Well, although you might just go on using the `log` method to debug your code, learning about and using other methods helps in better representation and easier debugging. And _hey!_, why not learn more to help us combat our common enemy — bugs. Besides, you dunno what your next job interviewer has under their sleeves.

Let’s get started, shall we?

Hopefully, your browser console is still up and running, if not open it up again, and never close it till we are done with this, as we will get back to them occasionally.
<br/>To view other methods on the console, try running `console.log(console)` — the irony! The data below should be returned to us:

```javascript
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert: ƒ assert()
clear: ƒ clear()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: (...)
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
Symbol(Symbol.toStringTag): "Object"
get memory: ƒ ()
set memory: ƒ ()
__proto__: Object
```
This gives us so much more methods than we (rather, I) ever knew existed on the console. And like every other numerous lists, we will pick our most important ones.


###console.assert()
The simplest case of using the `assert()` method, is when we want to display something on the console only and only if the assertion passed into the method is false. If by any means the assertion passes, nothing happens, or you get an `undefined` if you are using a browser console. To see this in action, pull up your console if not open (PUYCINO — this is not a real thing) and run the following code:

```javascript
var x = 21;
console.assert(x % 2 === 0, 'oops! x is not divisible by 2');
// or alternatively

var errMsg = 'oops! x is not divisible by 2';
console.assert(x % 2 === 0, errMsg);
```

You should get an assertion error with the error message printed to the console. Try changing `x` to 20 or any other even number and run the assert code again, this time nothing happens.

###console.clear()

This method is simple enough. Running `console.clear()` just clears the console and displays `Console was cleared` message (as if we cannot see it has been cleared). Run this code whenever you feel your console is all clogged up and you need room.

###console.dir() and console.dirxml()

This method helps us to print out to the console all the properties (methods) of any valid JavaScript object passed into it. Remember when we said — and proved — that `console` was an object. Now lets use it as an argument in the `console.dir()` method. PUYCINO and run the code `console.dir(console)` and a familiar output will be displayed. You can also try `console.dir(window)` to view the properties on the native Window object. And this will come in handy someday, you’ll see!

`dirxml` is almost similar to `dir` with very small and insignificant differences.

###console.error()

This displays content as an error — red highlight, light red background and a red error (x) sign by the side. All features to let you know that what is being displayed is an error. Try running `console.error('This is a typical error')` and see what I mean.

The use case for this is when you are expecting an error in your code. Example, during a .catch block of an API call that returns a Promise.

###console.group(), console.groupCollapsed() and console.groupEnd()

These methods are used to group together blocks of code or similar _whatever it is you’re trying to display to the console._
`group()` signifies the start of the group. It accepts an optional `label` as an argument. The label serves as, well, the label for the group.
<br/>`groupEnd()` marks the end of a group. <br/>
`groupCollapsed()` works like `group()` but while all items in `group()` is automatically all listed out, `groupCollapsed()` displays them in a collapsed manner, you will have to manually click on a “dropdown” list beside it to list them all out.
<br/>Let us see this in action. PUYCINO and paste the following:

```javascript
console.group('My fav tech tools')
// Here, 'my fav tech tools' is the label for my group
console.log('React')
console.log('Twitter Bootstrap')
console.log('Django')
console.log('Django REST')
console.log('Axios')
console.groupEnd() //ends the group
```
Groups can also be nested into another group. Let’s see how this and `groupCollapsed()` works:

```javascript
console.groupCollapsed('My fav languages and tools')
console.group('JavaScript') //nests in JavaScript group
console.log('React')
console.log('Redux')
console.log('Twitter Bootstrap')
console.groupEnd() //exits nested group for JavaScript
console.groupCollapsed('Python') //nests in a collapsed Python group
console.log('Django')
console.log('Django REST')
console.groupEnd() //exits nested group for Python
console.groupEnd() //exits all groups
```
As you can see, at first the displayed groups are collapsed and you will have to expand them manually. Next, you can see we nested in two more groups: JavaScript and Python.
>Always remember to exit each nested group with `groupEnd()` as pointed out above.

###console.log()

I think we all are familiar with this. So no need to waste time. It basically just prints out something to the console without any level of warning or danger.

###console.table()
This displays data in a tabular format. It takes in a compulsory `data` which must be an array or object — passing in a string does not work — and an optional `columns` as parameter.
Let us see this in action. Again, PUYCINO (hey, by now there is no more need to include this). Paste in the following:

```javascript
var nations = ['Nigeria', 'USA', 'Canada', 'Algeria'];
console.table(nations)
```
This should print the data out in a tabular form with `(index)` and `value` columns. Using arrays, the `(index)` column is auto filled with the index of the instance. To specify what should be used as the table’s index, pass in objects instead. Here, the `(index)` column will be filled by the `keys` of the object while the value will be filled by the `values` of the object. Try below:

```javascript
var nationsCurrency = {USA: 'dollars', Nigeria: 'naira', France: 'franc'}
console.table(nationsCurrency)
```

###console.time() and console.timeEnd()

`time()` starts a timer you can use to track how long an operation takes. It takes in an optional `label` as argument. Calling t`imeEnd()` with the same `label` ends the timer and ouputs the time (in miliseconds) that has elapsed since `time()` was called and code between `time()` and `timeEnd()` has executed.

```javascript
console.time('test')
let mult = (2000*4444);
mult * 222;
console.timeEnd('test')
```
Best use case for this is to compare which two similar functions or logic is faster. Example, the code below compares the speed of execution of `for` and `while` loops.

```javascript
console.time("test for loop");
for (i = 0; i < 100000; i++) {
  console.log(i)
}
console.timeEnd("test for loop");


console.time("test while loop");
while (i < 1000000) {
  i++
}
console.timeEnd("test while loop");
```
From running the above code, we can effectively see that the `for` loop is faster than the `while`.

###console.warn()

Outputs a warning message to the browser console. It displays the data in a light yellow background with a warning icon by the side. Try it:
```javascript
console.warn("GOT is hugely graphical and full of violent. Watch at your own discretion.")
```
We are done with the important methods. Hopefully by now you will have less `console.log()` lines during debugging sessions.
 
 Or maybe not, either way thanks for getting this far.
 

__*Valar Morghulis!*__