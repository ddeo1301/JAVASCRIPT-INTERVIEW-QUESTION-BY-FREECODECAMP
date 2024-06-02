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



     3) USE REF HOOKS
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


     4) USE CONTEXT HOOKS
          - used to access context in functional components. 
          - It allows you to consume context without having to wrap the component tree with a context provider. 
          - useContext takes a context object as an argument and returns the current context value. 

                const value = useContext(MyContext);
                useContext takes a context object and returns the current context value.

                            import React, { useContext } from 'react';

                            const MyContext = React.createContext();

                            function Display() {
                                const value = useContext(MyContext);
                                return <div>{value}</div>;
                            }

                            function App() {
                                return (
                                    <MyContext.Provider value="Hello, World!">
                                    <Display />
                                    </MyContext.Provider>
                                );
                            }

         - Multiple Contexts: Use multiple contexts by calling useContext multiple times:

                            const user = useContext(UserContext);
                            const theme = useContext(ThemeContext);


    5) USE REDUCER HOOKS  
         - useReducer hook is an alternative to the useState hook for managing complex state logic. 
         - It is based on the reducer pattern and allows US to manage state updates using a reducer function. 
         - useReducer takes two arguments: a reducer function and an initial state value. 
         - It returns the current state and a dispatch function.    

                const [state, dispatch] = useReducer(reducer, initialState);

         useReducer accepts a reducer function and an initial state, returning the current state and a dispatch function to trigger state changes.  

                        import React, { useReducer } from 'react';

                        const initialState = { count: 0 };

                        function reducer(state, action) {
                            switch (action.type) {
                                case 'increment':
                                return { count: state.count + 1 };
                                case 'decrement':
                                return { count: state.count - 1 };
                                default:
                                throw new Error();
                            }
                        }

                        function Counter() {
                            const [state, dispatch] = useReducer(reducer, initialState);

                            return (
                                <div>
                                <p>Count: {state.count}</p>
                                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                                </div>
                            );
                        }

     - Lazy Initialization: If the initial state is expensive to calculate, you can pass a function to useReducer

                    const [state, dispatch] = useReducer(reducer, initialArg, init);
                    function init(initialArg) {
                        return { count: initialArg };
                    }

     - Multiple Dispatches: Dispatch multiple actions based on different logic

                    dispatch({ type: 'increment' });
                    dispatch({ type: 'decrement' });


     6) USE CALLBACK HOOKS
          - Used to memoize a function.
          - Returns a memoized function.

                        const memoizedCallback = useCallback(() => {
                        // callback logic
                        }, [dependencies]);

          - Use when you want to avoid creating a new function every render, particularly useful when passing
           functions to child components to prevent unnecessary re-renders.
          - useCallback is for memoizing functions to prevent unnecessary re-creations.

                                    import React, { useState, useCallback } from 'react';

                                    function Parent() {
                                    const [count, setCount] = useState(0);

                                    const increment = useCallback(() => {
                                        setCount(c => c + 1);
                                    }, []);

                                    return <Child increment={increment} />;
                                    }

                                    function Child({ increment }) {
                                    return <button onClick={increment}>Increment</button>;
                                    }

        useCallback ensures that the increment function is not recreated on every render, preventing the 
        Child component from re-rendering unnecessarily.

     7) USE MEMO HOOKS
          - Used to memoize a value.
          - Returns a memoized value.

                        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

          - Use when you have an expensive computation that you don’t want to re-run on every render unless
           certain dependencies change.
          - useMemo is for memoizing values to avoid expensive recalculations.

                            import React, { useState, useMemo } from 'react';

                            function ExpensiveComponent({ a, b }) {
                            const computeExpensiveValue = (a, b) => {
                                // some expensive computation
                                return a + b;
                            };

                            const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

                            return <div>{memoizedValue}</div>;
                            }

        useMemo ensures that computeExpensiveValue is only recalculated when a or b changes, optimizing performance by avoiding unnecessary calculations.
              

















































































