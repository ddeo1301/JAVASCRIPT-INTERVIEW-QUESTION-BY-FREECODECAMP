Q1) HOW WE CAN ACHEIVE LIFECYCLE METHOD USING HOOKS 
   - In React, hooks allow you to use state and other React features without writing a class component
   - useEffect hook, which allows you to perform side effects in function components. 
   - This hook can effectively replace the lifecycle methods in class components (componentDidMount, 
   componentDidUpdate, and componentWillUnmount).

   - REPLICATING LIFECYCLE METHODS WITH REACT HOOKS
   
     1) componentDidMount: This lifecycle method runs once after the initial rendering. You can mimic this behavior by using useEffect with an empty dependency array [].

                import React, { useEffect } from 'react';

                function MyComponent() {
                    useEffect(() => {
                        // Code to run on component mount. Perform actions after component is mounted
                        console.log('Component did mount');

                        // Optionally return a cleanup function. Clean-up code when component is unmounted
                        return () => {
                        console.log('Component will unmount');
                        };
                    }, []); // Empty dependency array ensures this runs only once

                    return <div>Hello, world!</div>;
                }


     2) componentDidUpdate: This method runs after every update. You can achieve this with useEffect by specifying the dependencies that should trigger the effect.

                import React, { useState, useEffect } from 'react';

                function MyComponent() {
                    const [count, setCount] = useState(0);

                    useEffect(() => {
                        // Code run on component update. Perform actions when specific props or state change
                        console.log('Component did update:', count);
                    }, [count]); // Runs when `count` changes. Specify dependencies to trigger updates

                    return (
                        <div>
                        <p>Count: {count}</p>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                        </div>
                    );
                }


     3) componentWillUnmount: This method is used for cleanup when the component is about to unmount. You can achieve this by returning a cleanup function from the useEffect hook.

                import React, { useEffect } from 'react';

                function MyComponent() {
                    useEffect(() => {
                        // Effect logic here

                        // Cleanup function. Clean-up code before component is unmounted
                        return () => {
                        console.log('Component will unmount');
                        };
                    }, []); // No dependencies, runs on unmount. Empty dependency array ensures it runs only once

                    return <div>Cleanup on unmount</div>;
                }

     - Mount: Use useEffect with an empty dependency array [] to run code once after the initial render.
     - Update: Use useEffect with a dependency array containing the variables you want to watch for changes.
     - Unmount: Return a cleanup function from useEffect to perform cleanup tasks.



Q2) HOW ROUTING WORKS IN LATEST VERSION OF REACT 
   - Routing in React allows you to navigate between different pages in a single-page application (SPA) 
   without triggering a full page reload. 
   - It works by mapping specific URLs to corresponding React components, which are then rendered based on 
   the current URL.

   1) Router: 
        - The top-level component that manages routing.
        - This component wraps your entire application. 
        - It listens to changes in the browser’s URL and determines which component to display.

   2) Routes: 
        - A container that renders the appropriate component based on the URL.

   3) Route: 
        - Maps a URL path to a React component.
        - This component is used to define a path and associate it with a component. 
        - When the URL matches the path, the corresponding component is rendered.

   4) Link: 
        - Updates the URL without reloading the page.
        - This component is used to navigate between routes without reloading the page. 
        - It's like an anchor (<a>) tag but for single-page applications.

                        import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

                        const Home = () => <h1>Home</h1>;
                        const About = () => <h1>About</h1>;
                        const Contact = () => <h1>Contact</h1>;

                        const App = () => {
                            return (
                                <BrowserRouter>
                                <nav>
                                    <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>

                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                                </BrowserRouter>
                            );
                        };

        - The BrowserRouter component provides the routing context to its child components.
        - The nav section contains links created using the Link component, which update the URL without 
        triggering a full page reload.
        - The Routes component is a container that renders appropriate child Route based on the current URL.
        - Each Route defines a mapping between a URL path and a React component. When the URL matches the 
        path, the corresponding component is rendered.
        - When you click on a link, React Router updates the URL in the address bar and renders the 
        corresponding component without reloading the entire page.
        - This allows for smooth navigation and a better user experience in your SPA.

    5) Dynamic Routes:
         - You can create dynamic routes by using route parameters. For example, if you want to create a
          route for user profiles, you can define a path with a parameter

            <Route path="/user/:id" component={UserProfile} />

        UserProfile component will receive the id parameter via the match prop.
    
    6) Nested Routes:
         - You can create nested routes by placing Route components inside other components:

                function Dashboard() {
                    return (
                        <div>
                            <h2>Dashboard</h2>
                            <Route path="/dashboard/overview" component={Overview} />
                            <Route path="/dashboard/stats" component={Stats} />
                        </div>
                    );
                }

