What is Life cycle method in react with proper explanation?
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

