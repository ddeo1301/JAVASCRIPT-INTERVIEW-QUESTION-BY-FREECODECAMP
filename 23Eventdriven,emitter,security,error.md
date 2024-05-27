Q1) Explain Event Driven Architecture
  - Event-driven architecture is an approach to software design that emphasizes the flow of events or messages between different components of a system. 
  - In an event-driven system, each component is designed to respond to specific events, which can be generated internally or externally. 
 - Events are processed asynchronously, which means that components can continue to function independently of each other, even when they're waiting for events to occur.
 - The key concept in event-driven architecture is the event loop, which is a mechanism for managing the flow of events between components. 
 - In an event-driven system, the event loop is responsible for distributing events to the appropriate components and ensuring that they're processed in the correct order.

 Q2) Why Use Event-Driven Architecture?
  - It enables components to function independently of each other, which can improve scalability and reliability. 
  - It provides a flexible and modular architecture that can be adapted to a wide range of use cases. 
  - It can improve performance by allowing components to process events asynchronously, which can reduce the overall processing time required to complete a task.

  - Asynchronous Handling: Node.js can handle multiple events simultaneously without waiting for previous tasks to complete, making it efficient for I/O operations.
  - Decoupling: Different parts of your application can operate independently, only interacting through events, which makes the code more modular and maintainable.
  - Scalability: EDA allows for scalable architecture, as you can add more event listeners and emitters without significantly altering existing code.

Q3) What is Event Driven Architecture (EDA)?
 - Events: Actions or occurrences recognized by software. These can be user actions (like clicks or key presses), messages from other programs, or signals that certain processes have started or completed.

 - Event Emitter: A central component that listens for and emits (sends out) events. When something interesting happens, it emits an event.

 - Event Listeners: Functions or methods that wait for specific events to happen and then execute certain code in response.


 Q4) How EDA Works in Node.js
  - Setting up an Event Emitter: Node.js has a built-in module called events which provides an EventEmitter class. You create an instance of this class to handle your events.

  - Creating Events: You define and emit events when certain actions or operations occur. For example, when data is received from a network request, an event might be emitted.

  - Listening for Events: You set up listeners that wait for these events and then run specific functions when the events are emitted.


        // loads the events module, and EventEmitter is used to create an event emitter.
        const EventEmitter = require('events'); 

        // Create an instance of EventEmitter. 
        const myEmitter = new EventEmitter();

        // Set up a listener for the 'greet' event. When this event is emitted, the provided function runs, printing a greeting message.
        myEmitter.on('greet', (name) => {
            console.log(`Hello, ${name}!`);
        });

        // Emit the 'greet' event. emits the 'greet' event and passes 'Alice' as the argument to the event listener.
        myEmitter.emit('greet', 'Alice');




Q5) Error Handling 
 - Error handling in Node.js refers to the process of managing and responding to errors that occur during the execution of a program. Errors can arise due to various reasons, such as invalid user input, network failures, or bugs in the code. Proper error handling is crucial for building robust and reliable applications.

 - Node.js provides several mechanisms for handling errors, including:
  - try...catch blocks: Used to catch synchronous errors thrown using the throw statement.
  - Callbacks: Commonly used for asynchronous code, where errors are passed as the first argument to the callback function.
  - Promises: Errors can be handled using the .catch() method or by using async/await with try...catch.
 - Event Emitters: Errors can be emitted as events using the 'error' event, which should be handled by listening for the event.

 - Errors in Node.js can be classified into two main categories:
  - Operational errors: Runtime errors caused by external factors, such as network failures or file system issues. These errors can be handled and recovered from.
  - Programmer errors: Errors caused by bugs in the code, such as incorrect logic or unexpected input. These errors require fixing the underlying issue in the code.
  To effectively handle errors in Node.js, it's recommended to follow these best practices:
  - Use try...catch blocks for synchronous code and handle errors in callbacks or promises for asynchronous code.




Q6) SECURITY IN NODE.JS
  - Validate User Input: Ensure input validation to prevent security vulnerabilities.
  - Implement Authentication: Use secure authentication methods to control access to resources.
  - Limit Request Sizes: Prevent excessive data input that can lead to security breaches.
  - Set up Logging and Monitoring: Monitor server traffic to detect and respond to security threats.
  - Escape Outputs: Prevent injection attacks like XSS by escaping outputs in code.

