Q1) REACT TOOLKIT
 - Redux Toolkit (RTK) is a package that simplifies the development process by providing utility functions to
  manage state and actions in a Redux application. 
 - It is designed to eliminate boilerplate code and common mistakes, making it easier to write Redux applications. 
 - Redux toolkit acts as a wrapper around Redux and encapsulates its necessary functions. 
 - Redux toolkit is flexible and provides a simple way to make a store for large applications

 1) createStore:-
    - to actually create a Redux store
    - wrapped by configureStore function which automatically provides with middlewares and enhancers.
    - Reduces the boilerplate code needed to set up the Redux store.

 2) createSlice() 
    - function that comes in handy to replace create action & create Reducer functions with a single function.
    - Allows writing reducers with Immer.js to handle immutable state updates seamlessly.

 3) combineReducers
    - to combine multiple slice reducers into a single larger reducer
    - Classic reducer replaced by createReducer function which makes code shorter and simpler to understand.

 4) applyMiddleware
    - to combine multiple middleware into a store enhancer
    - Includes redux-thunk by default for handling async logic.
    - Automatically includes middleware for better error reporting and action logging in development mode.

 5) compose
    - to combine multiple store enhancers into a single store enhancer

 6) createAction() 
    - utility that returns an action creator function.

 7) createAsyncThunk() 
    - that takes Redux strings as arguments and returns a Promise.
    - Helps to manage the loading state and error handling in a more structured way.
    - To handle asynchronous operations like data fetching:

 8) createEntityAdapter()
    - utility that helps to perform CRUD operations.

 9) RTK Query
    - A powerful data fetching and caching tool built on top of Redux Toolkit.
    - Manages API requests, caching, synchronization, and more.
    - Helps to minimize the boilerplate and manage server-side data efficiently.


                        import { configureStore } from '@reduxjs/toolkit';
                        import { createSlice } from '@reduxjs/toolkit';

                        // Create a slice for the todos reducer
                        const todosSlice = createSlice({
                            name: 'todos',
                            initialState: [],
                            reducers: {
                                todoAdded(state, action) {
                                    state.push({
                                        id: action.payload.id,
                                        text: action.payload.text,
                                        completed: false,
                                    });
                                },
                                    todoToggled(state, action) {
                                    const todo = state.find((todo) => todo.id === action.payload);
                                    todo.completed = !todo.completed;
                                },
                            },
                        });

                        // Create the store
                        const store = configureStore({
                            reducer: {
                                todos: todosSlice.reducer,
                            },
                        });

                        // Use the store
                        store.dispatch(todosSlice.actions.todoAdded({ id: 1, text: 'Task 1' }));
                        store.dispatch(todosSlice.actions.todoToggled({ id: 1 }));

        This code sets up a Redux store with a single reducer for managing a list of todos. 
        The createSlice function is used to define the reducer, and the configureStore function is used to set up the store





Q2) DIFFRENTIATE BETWEEN CLASS COMPONENT AND FUNCTIONAL COMPONENT
   1) State Management:
         - Class components can hold and manage state internally using this.state and this.setState().
         - Functional components, by default, don't manage state, but you can use hooks like useState to add state management.

   2) Lifecycle Methods:
         - Class components have access to lifecycle methods like componentDidMount, componentDidUpdate,
          etc., which are used for tasks like fetching data, updating state, etc.
         - Functional components can use hooks like useEffect to achieve similar effects to lifecycle methods.

   3) Syntax:
        - Class components are written as ES6 classes and extend React.Component.
        - Functional components are written as JavaScript functions.

   4) Readability and Simplicity:
        - Functional components are generally considered more readable and simpler to write because they are
         just plain functions, while class components involve more boilerplate code.

   5) Performance:
        - There's a slight performance difference between the two, with functional components being marginally faster due to being simpler.