Q1) what is module in node.js
  - reusable piece of JS code that can be share across diff parts of an application or even diff application. It allows us to break down complex code into smaller, more manageable chunks.
  - To use a module in your Node.js application, you typically import it using the require function.
  - if you want to make functionality from your module available to other parts of your application, you can export it using the module.exports or exports objects.



   -  There are three main types of modules in Node.js:
        - Core Modules: These are built-in modules that come with Node.js installation, such as http, fs, path, etc. You can use them directly in your code by requiring them.
        - Local Modules: These are modules you create yourself within your Node.js application. You can define functions, objects, or values in one file and export them to be used in other files.
        - Third-Party Modules: These are modules developed by the community and available through the Node Package Manager (npm). You can install them in your project and use their functionality.
    
    const http = require('http');

  - In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders.

  - Think of modules as building blocks for your Node.js application. Instead of writing all your code in a single file, you can break it down into smaller, more manageable files, each focusing on a specific aspect of your application. These files are known as modules.

Each module in Node.js has its own scope, which means that the variables, functions, and objects defined in one module are not accessible from another module unless explicitly exported and imported. This helps in keeping your code modular and prevents conflicts between different parts of your application.

 This allows you to access the functionality provided by the module and use it in your code. Conversely, 


Q2) what is middleware
  - Middleware in Node.js is a function that acts as an intermediary between the request and response cycle of a web application. It allows you to modify, add, or remove data from the request and response objects before they reach the final destination.
  - In simple terms, middleware is like a gatekeeper that checks and processes requests before they are handled by the main application logic.           

      - Request Handling: When a request comes into your application (like someone visiting a web page), it goes through a chain of middleware functions.
      - Tasks in Order: Each middleware function can do something with the request, such as:
              Logging information
              Checking user authentication
              Parsing request data (like converting JSON data)
              Handling errors
      - Passing Control: After a middleware function does its job, it can pass control to the next function in the chain by calling next().
      - Response: Finally, after going through all the necessary middleware, the request reaches the end where a response is sent back to the user.


Q3) what are some commonly  used timing feature of node .js ?

      - setTimeout(): execute a fn after specific delay. If you want to print a message after 2 seconds, you use setTimeout.

      - clearTimeout(): Cancels a timeout that was previously set with setTimeout. If you set a timeout to
       print a message but decide to cancel it before it runs, you use clearTimeout.

      - setInterval(): Repeatedly executes a function at specified intervals. If you want to print a message
       every 3 seconds, you use setInterval

      - clearInterval(): Stops an interval that was previously set with setInterval. If you set an interval
       to print a message every 3 seconds but decide to stop it after some time, you use clearInterval.

      - setImmediate(): Executes a function immediately after the current event loop completes. If you want
       to run a function as soon as possible but after the current code execution is finished, you use 
       setImmediate.

      - clearImmediate(): Cancels an immediate action that was previously set with setImmediate. If you set
       an immediate to run a function but decide to cancel it before it runs, you use clearImmediate.

      - process.nextTick(): This feature allows you to execute a callback function on the next pass of the 
      event loop. It's useful for deferring a task until the next loop, but still before any I/O events.

Q4) what is Node.js?
 - Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.


Q5) if node.js is single threaded then how does it handles concurrency
  - Node.js, despite being single-threaded, is capable of handling concurrency and multiple I/O operations simultaneously due to its asynchronous nature. This is achieved through the use of an event loop, which continuously checks for events or tasks ready to be executed. When I/O operations are initiated, Node.js uses callbacks to signal their completion, placing these callbacks in an event queue. This event-driven execution model allows Node.js to efficiently manage and switch between tasks as they become ready, without the need to generate new threads for each task.
  - Non-blocking I/O operations are a key aspect of Node.js concurrency, ensuring that the event loop is not blocked by I/O operations, enabling the handling of multiple requests concurrently. Additionally, Node.js has a thread pool for executing particular tasks in separate threads, further enhancing its concurrency capabilities.
 - In summary, Node.js handles concurrency through its event-driven, non-blocking I/O model, which leverages an event loop, callbacks, and a thread pool to efficiently manage and execute multiple tasks simultaneously, despite being single-threaded


Q6) what are diff HTTP methods? explain when to use what ? 
 - HTTP methods are standardized actions that can be performed on resources identified by a URL in a RESTful API. Here's an overview of the main HTTP methods and their typical use cases:

GET:
   - Purpose: Retrieve data from the server.
   - Use Case: Use GET when you want to request data without modifying anything. For example, fetching a list
    of users, details of a specific product, or searching for articles.
   - Idempotent: Yes. Multiple identical GET requests should result in the same response.

POST:
   - Purpose: Send data to the server to create a new resource.
   - Use Case: Use POST when you want to submit data to the server to create a new resource, such as creating
    a new user, submitting a form, or uploading a file.
   - Idempotent: No. Multiple identical POST requests can result in multiple resource creations.

PUT:
   - Purpose: Update an existing resource or create a new resource if it does not exist.
   - Use Case: Use PUT when you need to update an existing resource or create a resource at a specific URL. 
   For example, updating user details or setting the entire data of an item.
   - Idempotent: Yes. Multiple identical PUT requests should have the same effect as a single request.

PATCH:
   - Purpose: Apply partial modifications to a resource.
   - Use Case: Use PATCH when you need to update a part of an existing resource. For example, updating a
    single field of a user profile or changing specific attributes of a product.
   - Idempotent: Yes. Multiple identical PATCH requests should have the same effect as a single request.


Q6) what is event loop?
 - Call Stack: JavaScript uses a call stack to keep track of the currently executing function. Functions are executed in a Last In, First Out (LIFO) manner.
  - Callback Queue: Asynchronous operations like timers or I/O operations are handled by the browser or Node.js runtime. Once these operations are complete, corresponding functions (callbacks) are placed in the callback queue.
 -  Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.
 -  Execution: Functions in the call stack are executed one by one. If a function contains asynchronous code, it might initiate further asynchronous operations.
 -  Callback Execution: When an asynchronous operation is complete, its callback is placed in the callback queue.
 -  Repeat: The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

  In essence, the event loop orchestrates the flow of tasks in JavaScript, ensuring that asynchronous operations are handled effectively without blocking the main thread, thus enabling the application to remain responsive.

      console.log('Start');

      setTimeout(() => {
          console.log('Timeout callback');
      }, 2000);

      console.log('End');


Q7) what is REST API? How does it work?
 - A REST API, which stands for Representational State Transfer Application Programming Interface, is a standardized way for software applications to communicate over the internet. When a client, like a web browser or a program, requests information from a server using a REST API, the server sends back the current state of the requested resource in a standardized format. This format allows the client to easily interpret and use the information provided by the server.
 - In simple terms, a REST API works like a mediator between different software systems, enabling them to interact efficiently. It follows specific guidelines, such as using HTTP requests like GET, POST, PUT, and DELETE to perform actions like reading, creating, updating, and deleting data. The key principles of a REST API include being stateless, meaning each request contains all the necessary information, and having cacheable data to improve performance.
 
Overall, a REST API allows different software applications to communicate seamlessly, making it easier for them to share and exchange information in a secure and efficient manner.


