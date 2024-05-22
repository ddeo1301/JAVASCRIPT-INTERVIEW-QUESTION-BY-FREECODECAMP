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


Q2) 