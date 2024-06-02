Q1) LIFECYCLE METHOD IN REACT
 - In React, a life cycle method refers to special methods in a React component that get called at different stages of the component's life cycle. The life cycle of a React component can be divided into three main phases:
    1) Mounting: When the component is being created and inserted into the DOM.
    2) Updating: When the component is being re-rendered as a result of changes to its state or props.
    3) Unmounting: When the component is being removed from the DOM.
    Each of these phases has specific life cycle methods that you can override to run code at particular times. Here's a brief overview of the most commonly used life cycle methods:

 1) Mounting Phase
      - constructor(props):
          - Called before the component is mounted.
          - Used to initialize state and bind event handlers.
          - super(props) must be called if we are using the constructor in a class component to ensure    this.props is correctly set.

      - static getDerivedStateFromProps(props, state):
          - Called right before rendering the element(s) in the DOM.
          - Used to update the state based on the initial props.

      - render():
          - The only required method in a class component.
          - Returns the JSX that represents the component's UI.

      - componentDidMount():
          - Called after the component is mounted and has been rendered to the DOM.
          - Perfect for starting API calls, setting up subscriptions, or initializing third-party libraries.

 2) Updating Phase
      - static getDerivedStateFromProps(props, state):
          - Called when the component is about to re-render due to changes in props or state.
          - Can update the state based on the new props.

      - shouldComponentUpdate(nextProps, nextState):
          - Called to let React know if the component's output is not affected by the current change in state or props.
          - Used for performance optimization.

      - render():
          - Same as in the mounting phase, renders the component's UI.

      - getSnapshotBeforeUpdate(prevProps, prevState):
          - Called right before the changes from the virtual DOM are to be reflected in the DOM.
          - Used to capture some information from the DOM before it changes (e.g., scroll position).

      - componentDidUpdate(prevProps, prevState, snapshot):
          - Called after the component has been updated in the DOM.
          - Perfect for handling side effects like network requests, DOM updates, etc.

 3) Unmounting Phase
      - componentWillUnmount():
          - Called right before the component is removed from the DOM.
          - Used for cleanup tasks like removing event listeners, canceling network requests, or clearing timers.

                import React, { Component } from 'react';

                class MyComponent extends Component {
                constructor(props) {
                    super(props);
                    this.state = { count: 0 };
                    console.log('Constructor called');
                }

                static getDerivedStateFromProps(nextProps, prevState) {
                    console.log('getDerivedStateFromProps called');
                    return null;
                }

                componentDidMount() {
                    console.log('componentDidMount called');
                }

                shouldComponentUpdate(nextProps, nextState) {
                    console.log('shouldComponentUpdate called');
                    return true;
                }

                getSnapshotBeforeUpdate(prevProps, prevState) {
                    console.log('getSnapshotBeforeUpdate called');
                    return null;
                }

                componentDidUpdate(prevProps, prevState, snapshot) {
                    console.log('componentDidUpdate called');
                }

                componentWillUnmount() {
                    console.log('componentWillUnmount called');
                }

                render() {
                    console.log('render called');
                    return (
                    <div>
                        <p>Count: {this.state.count}</p>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                        Increment
                        </button>
                    </div>
                    );
                }
                }

                export default MyComponent;



Q2) DEBOUNCING IN REACT 
   - Debouncing is a strategy used to improve the performance of a feature by controlling the time at which a function should be executed.
   - Debouncing accepts a function and transforms it in to an updated (debounced) function so that the code inside the original function is executed after a certain period of time.
   - If the debounced function is called again within that period, the previous timer is reset and a new timer is started for this function call. The process repeats for each function call.

Imagine you have a button that can be clicked, but sometimes users accidentally click it multiple times in quick succession, triggering multiple actions when you only want one. Debouncing in React helps solve this by delaying the execution of a function until after a certain amount of time has passed since the last time it was called.

Here's a simple explanation of how you might implement debouncing in React:
 1) Import React and useState: 
      - First, you'll need to import React and useState if you're not using class components.
 2) Create a State for Tracking Delay: 
      - Set up a state variable to keep track of the time delay.
 3) Create a Debounced Function: 
      - Write a function that uses setTimeout to delay the execution of another function. 
      - This function will be the one you want to debounce.
 4) UseEffect for Cleanup: 
      - Inside a useEffect hook, set up cleanup code to clear the timeout whenever the component unmounts or
       the delay changes.
 5) Attach Debounced Function to Event: 
      - Attach the debounced function to the event you want to debounce, such as a button click.
 6) Adjust Delay as Needed: 
      - You can adjust the delay time according to your needs.


                            import React, { useState, useEffect } from 'react';

                            function DebouncedButton() {
                                const [delay, setDelay] = useState(300); // 300ms delay

                                useEffect(() => {
                                    return () => clearTimeout(debounceTimer);
                                }, [delay]);

                                let debounceTimer;

                                const debouncedFunction = () => {
                                    clearTimeout(debounceTimer);
                                    debounceTimer = setTimeout(() => {
                                        // Do something when the delay has passed
                                        console.log('Button clicked, but debounced!');
                                    }, delay);
                                };

                                return (
                                    <div>
                                        <button onClick={debouncedFunction}>Click Me</button>
                                    </div>
                                );
                            }

                            export default DebouncedButton;


    In this example, the debouncedFunction will only execute after the specified delay (in this case, 300 
    milliseconds) has passed since the last time it was called. Adjust the delay value as needed for your 
    specific use case.
