// CREATE YOUR EXPRESS APP

// app.js
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

// Your routes will go here
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// DEFINE YOUR api endpoint

// app.js
// ... (previous code)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]; 

// Get all items
app.get('/items', (req, res) => {
    res.json(items);
})

// Get a specific item
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === ItemId);

    if(item)  res.json(item);
    else  res.status(404).json({message : 'Item not found'});
});
  
  // Add a new item
  app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
  });
  
  // Update an item
  app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
  
    items = items.map(item => (item.id === itemId ? updatedItem : item));
  
    res.json(updatedItem);
  });
  
  // Delete an item
  app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(item => item.id !== itemId);
  
    res.json({ message: 'Item deleted successfully' });
  });
  
  // ... (remaining code)




// EXPLAIN ROUTING
// Routing in Node.js is the process of determining how an application responds to client requests to different 
// URLs (endpoints). It involves mapping HTTP methods (GET, POST, PUT, DELETE, etc.) to specific functions that 
// handle those requests and send back appropriate responses

const express = require('express');
const app = express();
const port = 3000;

// Route for GET request to the homepage. Handles GET requests to the root URL(/), responding with a welcome message.
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for GET request to the /about page. Handles GET requests to the /about URL, responding with an about message.
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route for POST request to /submit. handles POST requests to the /submit URL, responding with a submission confirmation.
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

 



// Express.js is like a toolkit that helps you build web applications and APIs with Node.js more easily and
// efficiently.

// KEY CONCEPT IN EXPRESS
// Routes: Define how your server responds to different URL requests.
// Middleware: Functions that process requests before they reach your route handlers.
// Request and Response: Objects that represent the incoming request and the outgoing response.