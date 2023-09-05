---
export_on_save:
  puppeteer: true
puppeteer:
  format: A4
  scale: 1.0
  margin: { top: 1cm, right: 1cm, bottom: 1cm, left: 1cm }
---

# Async/await

> Taken from <https://javascript.info/async-await>; and modified slightly.

- [Async functions](#async-functions)
- [Await](#await)
  - [Can't use `await` in regular functions](#cant-use-await-in-regular-functions)
- [Promise to async/await](#promise-to-asyncawait)
  - [`await` won't work in the top-level code](#await-wont-work-in-the-top-level-code)
- [Async methods](#async-methods)
- [Error handling](#error-handling)
  - [`async/await` and `promise.then/catch`](#asyncawait-and-promisethencatch)
  - [`async/await` works well with `Promise.all`](#asyncawait-works-well-with-promiseall)
- [Summary](#summary)

There's a special syntax to work with promises in a more comfort fashion, called "async/await". It's surprisingly easy to understand and use.

## Async functions

Let's start with the `async` keyword. It can be placed before function, like this:

```js
async function f() {
  return 1;
}
```

The word "async" before a function means one simple thing: a function always returns a promise. If the code has `return <non-promise>` in it, then JavaScript automatically wraps it into a resolved promise with that value.

For instance, the code above returns a resolved promise with the result of `1`, let's test it:

```js run
async function f() {
  return 1;
}

f().then(alert); // 1
```

...We could explicitly return a promise, that would be the same:

```js run
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

So, `async` ensures that the function returns a promise, wraps non-promises in it. Simple enough, right? But not only that. There's another keyword `await` that works only inside `async` functions, and it's pretty cool.

## Await

The syntax:

```js
// works only inside async functions
let value = await promise;
```

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

Here's example with a promise that resolves in 1 second:

```js run
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait till the promise resolves (*)

  alert(result); // "done!"
}

f();
```

The function execution "pauses" at the line `(*)` and resumes when the promise settles, with `result` becoming its result. So the code above shows "done!" in one second.

Let's emphasize: `await` literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn't cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

It's just a more elegant syntax of getting the promise result than `promise.then`, easier to read and write.

### Can't use `await` in regular functions

If we try to use `await` in non-async function, that would be a syntax error:

```js run
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
```

We can get such error in case if we forget to put `async` before a function. As said, `await` only works inside `async function`.

## Promise to async/await

Let's look at a `showAvatar()` example and rewrite it using `async/await`:

```js
fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise(function (resolve, reject) {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => alert(error.message));
```

1. We'll need to replace `.then` calls by `await`.
2. Also we should make the function `async` for them to work.

```js run
async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
```

Pretty clean and easy to read, right? Much better than before.

### `await` won't work in the top-level code

People who are just starting to use `await` tend to forget that, but we can't write `await` in the top-level code. That wouldn't work:

```js run
// syntax error in top-level code
let response = await fetch("/article/promise-chaining/user.json");
let user = await response.json();
```

So we need to have a wrapping async function for the code that awaits. Just as in the example above.

## Async methods

A class method can also be async, just put `async` before it.

Like here:

```js run
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter().wait().then(alert); // 1
```

The meaning is the same: it ensures that the returned value is a promise and enables `await`.

## Error handling

If a promise resolves normally, then `await promise` returns the result. But in case of a rejection it throws the error, just if there were a `throw` statement at that line.

This code:

```js
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

...Is the same as this:

```js
async function f() {
  throw new Error("Whoops!");
}
```

In real situations the promise may take some time before it rejects. So `await` will wait, and then throw an error.

We can catch that error using `try..catch`, the same way as a regular `throw`:

```js run
async function f() {
  try {
    let response = await fetch("http://no-such-url");
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

In case of an error, the control jumps to the `catch` block. We can also wrap multiple lines:

```js run
async function f() {
  try {
    let response = await fetch("/no-user-here");
    let user = await response.json();
  } catch (err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
```

If we don't have `try..catch`, then the promise generated by the call of the async function `f()` becomes rejected. We can append `.catch` to handle it:

```js run
async function f() {
  let response = await fetch("http://no-such-url");
}

// f() becomes a rejected promise

f().catch(alert); // TypeError: failed to fetch // (*)
```

If we forget to add `.catch` there, then we get an unhandled promise error (and can see it in the console).

### `async/await` and `promise.then/catch`

When we use `async/await`, we rarely need `.then`, because `await` handles the waiting for us. And we can use a regular `try..catch` instead of `.catch`. That's usually (not always) more convenient.

But at the top level of the code, when we're outside of any `async` function, we're syntactically unable to use `await`, so it's a normal practice to add `.then/catch` to handle the final result or falling-through errors.

### `async/await` works well with `Promise.all`

When we need to wait for multiple promises, we can wrap them in `Promise.all` and then `await`:

```js
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```

In case of an error, it propagates as usual: from the failed promise to `Promise.all`, and then becomes an exception that we can catch using `try..catch` around the call.

## Summary

The `async` keyword before a function has two effects:

1. Makes it always return a promise.
2. Allows to use `await` in it.

The `await` keyword before a promise makes JavaScript wait until that promise settles, and then:

1. If it's an error, the exception is generated, same as if `throw error` were called at that very place.
2. Otherwise, it returns the result, so we can assign it to a value.

Together they provide a great framework to write asynchronous code that is easy both to read and write.

With `async/await` we rarely need to write `promise.then/catch`, but we still shouldn't forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. Also `Promise.all` is a nice thing to wait for many tasks simultaneously.
