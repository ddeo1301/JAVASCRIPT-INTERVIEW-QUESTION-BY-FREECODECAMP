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
