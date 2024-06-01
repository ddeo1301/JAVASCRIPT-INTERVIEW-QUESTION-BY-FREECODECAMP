Q) DIFFERENT TYPES OF HOOKS IN REACT
  - React Hooks are functions in React that allow functional components to use state and other React features without the need for class components. 
     1) USE STATE HOOK
         - used to add state to functional components. 
         - It allows you to declare a state variable and its corresponding update function.

                   const [state, setState] = useState(initialState); 

         - useState returns an array with two elements: the current state value and a function to update that state.
                  
                        import React, { useState } from 'react';

                        function Counter() {
                        const [count, setCount] = useState(0);

                        return (
                            <div>
                            <p>You clicked {count} times</p>
                            <button onClick={() => setCount(count + 1)}>Click me</button>
                            </div>
                        );
                        }

         - Functional Update :-  If updating state based on the previous state, use a function

                        setCount(prevCount => prevCount + 1);

         - Lazy Initialization:- If the initial state is expensive to calculate, you can pass a function that 
         computes the initial state:
                          const [count, setCount] = useState(() => computeInitialCount());


     2) USE EFFECT HOOK
         - used to perform side effects in functional components. 
         - It is similar to the componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle 
         methods in class components. 
         - useEffect takes two arguments: a function that contains the side effect code and an optional array 
         of dependencies

                    useEffect(() => {
                    // effect
                    return () => {
                        // cleanup
                    };
                    }, [dependencies]);

         - useEffect runs after every render by default. You can control when it runs by passing an array of 
         dependencies. If you pass an empty array, it runs only once after the initial render.

                        import React, { useEffect, useState } from 'react';

                        function DataFetcher() {
                        const [data, setData] = useState(null);

                        useEffect(() => {
                            fetch('https://api.example.com/data')
                            .then(response => response.json())
                            .then(data => setData(data));
                        }, []); // Runs only once

                        return <div>{data ? data : 'Loading...'}</div>;
                        }

         - Conditional Effects: Only run when specific values change

                        useEffect(() => {
                        // effect
                        }, [someValue]);


         - Cleanup: Clean up side effects to avoid memory leaks:

                        useEffect(() => {
                        const subscription = subscribeToSomeService();
                        return () => {
                            subscription.unsubscribe();
                        };
                        }, []);



     3) USEREF HOOKS
          - used to create a mutable reference to a DOM element or a value that persists across renders. 
          - It returns an object with a current property that can be used to access the referenced value.

                    const refContainer = useRef(initialValue);
                    useRef returns a mutable object with a .current property that can be updated without
                     causing a re-render.

                    import React, { useRef, useEffect } from 'react';

                    function FocusInput() {
                    const inputRef = useRef(null);

                    useEffect(() => {
                        inputRef.current.focus();
                    }, []);

                    return <input ref={inputRef} />;
                    }

       - Storing Mutable Values: Store any mutable value without causing re-renders:

                const countRef = useRef(0);
                countRef.current = countRef.current + 1;

       - Accessing DOM Elements: Directly access and manipulate DOM elements

                const divRef = useRef(null);
                useEffect(() => {
                console.log(divRef.current); // Access the DOM element
                }, []);


     4) USECONTEXT HOOKS
          - used to access context in functional components. 
          - It allows you to consume context without having to wrap the component tree with a context provider. 
          - useContext takes a context object as an argument and returns the current context value. 

                const value = useContext(MyContext);
                useContext takes a context object and returns the current context value.

                        

















































































