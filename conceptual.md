### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
	Some of the ways include using callbacks, promises and async/await. 

- What is a Promise?
	It is an object in JS that represents a value that may or may not be available yet but will be either resolved or rejected at some point in 
	the future. 

- What are the differences between an async function and a regular function?
	The difference is that the await keyword is used to pause execution unitl the async operation is completed. As opposed to a regular
	function which executes synchronously. 

- What is the difference between Node.js and Express.js?
	Node is a runtime environment that allows server-side JS exexution. Express is a web application framework that runs on top of 
	node.js providing additional features. 

- What is the error-first callback pattern?
	It is a convention in node and js where callbacks passed to async functions have the first parameter reserved for an error object

- What is middleware?
	They are functions that intercept and process data as it flows between different layers or components of an aplication. 

- What does the `next` function do?
	The next function is used in middleware to pass control to the next middleware function in the chain, 
	allowing the application to continue processing the request or response. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

1. There are 3 seperate await requests which can have possibly very long wait times. It can be refactored into a Promise.all()

2. Also there is no handaling of errors. If the requests return an error, there is no handling of the error which might break the app. 