# Broken App Issues
-Incorrect Error Handling: The try-catch block in the / route is not correctly handling errors. The catch block is missing the err parameter, and errors are not being properly passed to the error handling middleware.


# Improvements Made to Fix the Issues:

-Proper Error Handling: Replaced the incorrect try-catch block with a correct one, and now errors are properly passed to the error handling middleware using next(err).

-Rate Limiting: To prevent exceeding the GitHub rate limit, implemented batching of requests in groups of 60 developers. This allows the app to handle rate limiting gracefully and continue processing the remaining developers after waiting for the rate limit.

-Middleware for JSON Parsing: Added express.json() middleware to parse the request body as JSON, enabling easier access to the list of developers in the request payload.

-Async/Await Refactoring: Refactored the code to use async/await in a more efficient way for handling multiple requests concurrently.

-Consistent JSON Response: Changed the response to use res.json() instead of res.send(JSON.stringify(...)) for a more standardized JSON response.

-Error Handling Middleware: Added a custom error handling middleware to log errors and return an appropriate error response with a status code of 500 for internal server errors.