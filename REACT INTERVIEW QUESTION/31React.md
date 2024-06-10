Q1) what is REACT and how this work behind the scene?
  - React is a popular JavaScript library used for building user interfaces, particularly single-page applications where we need a dynamic, interactive experience. It was developed by Facebook and is widely used due to its simplicity, flexibility, and efficiency.

 - KEY CONCEPTS OF REACT:
    1) Components Based Architecture:
        - React applications are built from components, which are reusable, independent pieces of UI.
        - Components can be simple (like a button) or complex (like an entire form or page).
        - Each component can maintain its own state and can be nested within other components.

    2) JSX:
        - JSX stands for JavaScript XML, JSX allows us to write HTML like syntax inside our JS code and will enable
        us to build React component that look like standared HTML markup. It is syntax extension while React is JS library
        -  JSX looks like HTML, but under the hood it is transformed into plain JS object. We cant return two object
        from a fn without wrapping them into an array
        
    3) State and Props:
        - State: 
             - State is built in React object that is use to contain data or information about the component
             - State is mutable, meaning it can be updated and changed using this.setState
             - can only be used in class component 
             - whenever state variables updates react rerenders the component
        - Props: 
            - Short for properties, these are read-only attributes passed from parent components to child components OR used to pass data and event handler to the children components
            - Props are immutable, meaning they cannot be changed once set by the parent component.
            - can be used in both class and functional component

                    // Using State
                    import React, { useState } from 'react';

                    function Counter() {
                        const [count, setCount] = useState(0);

                        function handleClick() {
                            setCount(count + 1);
                        }

                        return (
                            <div>
                            <p>Count: {count}</p>
                            <button onClick={handleClick}>Increment</button>
                            </div>
                        );
                    }

                    // Using Props
                    import React from 'react';

                    function Welcome(props) {
                        return <h1>Hello, {props.name}!</h1>;
                    }

                    function ParentComponent() {
                        return (
                            <div>
                            <Welcome name="John" />
                            </div>
                        );
                    }
                    
    In the first example, the Counter component uses state to manage its internal count, which can be updated when the button is clicked. In the second example, the Welcome component uses props to display a personalized greeting, which is passed from the ParentComponent.

    4) Virtual DOM:
        - React uses a virtual DOM, a lightweight representation of the actual DOM.
        - When a component's state changes, React updates the virtual DOM first, then compares it with the actual DOM (a process called "reconciliation") and efficiently updates only the parts that changed.

 - HOW REACT WORKS BEHIND THE SCENES?
      1) Component Rendering:
        - When you create a React component, it returns a description of what the UI should look like (usually written in JSX).
        - React converts this description into actual DOM elements and updates the web page accordingly.

      2) React DOM:
        - The ReactDOM library is used to render React components to the web page. It translates the React components into real DOM nodes.
        - For example: ReactDOM.render(<App />, document.getElementById('root')) renders the App component inside the HTML element with id root.

      3) Virtual DOM and Reconciliation:
        - When a component's state or props change, React updates the virtual DOM tree.
        - React then uses a diffing algorithm to compare the new virtual DOM tree with the previous one.
        - It identifies the changes and updates only the necessary parts of the actual DOM, making the update process very efficient.

      4) Event Handling:
         - React standardizes event handling across browsers. Instead of attaching event handlers directly to the DOM elements, React attaches a single event listener to the root and delegates events to the appropriate component using a process called event delegation.

                import React, { useState } from 'react';

                function Counter() {
                    // Declare a state variable named count
                    const [count, setCount] = useState(0);
                    // State Hook: useState(0) initializes the state variable count to 0 and provides a function 
                    setCount to update it.

                return (
                        <div>
                        <p>You clicked {count} times</p>
                        // Event Handler: The onClick event of the button calls setCount(count + 1) to increment the count.
                        <button onClick={() => setCount(count + 1)}>
                            Click me
                        </button>
                        </div>
                    );
                }

                export default Counter;

- When the button is clicked:
    - setCount updates the state.
    - React re-renders the Counter component.
    - The virtual DOM updates, identifies the change, and efficiently updates the real DOM.

- Summary:
    - React simplifies building dynamic user interfaces by breaking them down into components, managing state efficiently, and updating the UI through the virtual DOM. This approach results in faster, more efficient web applications.




Q2) props drilling?
 - Prop drilling is a technique used in React where data or state is passed down through multiple layers of a component hierarchy. 
 - It involves passing data from a parent component to its children, and then from those children to their own children, until the data reaches the desired component that needs it.

            // ParentComponent.js
            import React from 'react';
            import ChildComponent from './ChildComponent';

            function ParentComponent() {
            const data = 'Hello from Parent';
            return (
                <div>
                <ChildComponent data={data} />
                </div>
            );
            }

            export default ParentComponent;

            // ChildComponent.js
            import React from 'react';
            import GrandchildComponent from './GrandchildComponent';

            function ChildComponent(props) {
            return (
                <div>
                <GrandchildComponent data={props.data} />
                </div>
            );
            }

            export default ChildComponent;

            // GrandchildComponent.js
            import React from 'react';

            function GrandchildComponent(props) {
            return <div>{props.data}</div>;
            }

            export default GrandchildComponent;
    - In this example, the data prop is passed from the ParentComponent to the ChildComponent, and then from the ChildComponent to the GrandchildComponent. This is an example of prop drilling, where the data is passed through multiple levels of components to reach the component that needs it.

 - ISSUES WITH PROPS DRILLING
       - Code Duplication: The same data is passed down to multiple child components, even if they do not need it.
       - Increased Cognitive Load: It can become difficult to track the flow of data through multiple components.
       - Decreased Maintainability: Changes to the data flow can require updates in multiple components.
       - Performance Overhead: Passing props through multiple levels of components can introduce performance overhead.

- To avoid these issues, it is recommended to use alternative techniques such as the Context API or state management libraries like Redux or MobX. These approaches can help centralize and manage application state, reducing the need for prop drilling and improving code maintainability and performance.
