AUTHENTICATION
  - Authentication is about verifying who a user is. When a user tries to log into a system, the system needs to check their identity. This usually involves:
    - User provides credentials: The user enters their username and password.
    - System verifies credentials: The system checks if these credentials match what's stored in the database.
    - User is authenticated: If the credentials are correct, the user is authenticated and can access the system.

AUTHENTICATION BEST PRACTISES
    - Use HTTPS: Always use HTTPS to secure data transmission between the client and server, especially when handling login credentials.
    - Password Hashing: Store passwords securely by hashing and salting them. Libraries like bcrypt can help with this.
    - Multi-Factor Authentication (MFA): Implement MFA to add an extra layer of security. This could involve something the user knows (password) and something they have (e.g., a mobile app token).
    - Session Management: Use secure and random session tokens to manage user sessions.

JSON Web Tokens are a popular way to implement authentication and authorization in Node.js. Users receive a token upon login, which they include in subsequent requests. 
            const jwt = require('jsonwebtoken');
            // Create a token
            const token = jwt.sign({ userId: 1 }, 'secret_key', { expiresIn: '1h' });

            // Verify a token
            jwt.verify(token, 'secret_key', (err, decodedToken) => {
            if (err) {
                console.error('Token verification failed');
            } else {
                console.log('Decoded token:', decodedToken);
            }
            });



AUTHORIZATION
  - Authorization is about checking what a user is allowed to do. Once a user is authenticated, the system needs to determine what resources the user can access or what actions they can perform. 
  - In Node.js, authorization can be managed using roles and permissions. For example:
        - User roles: Users are assigned roles (e.g., admin, editor, viewer).
        - Permissions: Each role has specific permissions (e.g., admins can delete content, editors can modify content, viewers can only read content).
        - Check permissions: When a user tries to perform an action, the system checks if their role has the required permissions.

AUTHORIZATION BASED PRACTISES
    - Role-Based Access Control (RBAC): Implement RBAC to assign roles (e.g., admin, user) to users and restrict access based on their roles.
    - Middleware: Use middleware functions to check a user’s permissions before granting access to a route or resource.
    - Access Tokens: Issue access tokens with user permissions encoded. Verify these tokens on the server-side for every request.
            function checkAdmin(req, res, next) {
            if (req.user && req.user.role === 'admin') {
                next();
            } else {
                res.status(403).json({ message: 'Access denied' });
            }
            }

            // Protect a route
            app.get('/admin', checkAdmin, (req, res) => {
            res.send('Admin panel');
            });



DIFFERENCE BETWEEN AUTHENCTICATION AND AUTHORIZATION
    - Authentication is about verifying identity (who the user is).
    - Authorization is about verifying permissions (what the user can do).

    - Authentication: You prove your identity to the bouncer at a club by showing your ID.
    - Authorization: Once inside, whether you can access the VIP area or just stay in the general area depends on the stamp or wristband you receive.
            function checkAdmin(req, res, next) {
            if (req.user && req.user.role === 'admin') {
                next();
            } else {
                res.status(403).json({ message: 'Access denied' });
            }
            }

            // Protect a route
            app.get('/admin', checkAdmin, (req, res) => {
            res.send('Admin panel');
            });




HASHING
 - Hashing is the process of converting a password into a fixed-length string of characters using a mathematical function. This one-way process ensures that the original password cannot be retrieved from the hash.
 - The same input will always produce the same output.

SALTING
 - Salting is the addition of random data (called a salt) to the password before hashing. This ensures that even if two users have the same password, their hashes will be different. Salting protects against attacks like rainbow tables that aim to reverse hashes.

BCRYPT
 - Bcrypt is a specific hashing algorithm designed for password storage. It uses a salt and a cost factor that determines how computationally expensive the hash function is. This makes bcrypt slow, which is a good thing for security - it slows down attackers trying to guess passwords.