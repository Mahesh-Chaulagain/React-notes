# Step 1: Install Dependencies
- npm install @reduxjs/toolkit react-redux

# Step 2: Set up the Redux store
- Create a new directory called redux inside src, and then create a file called store.js inside it.
    
    // src/redux/store.js
    import { configureStore } from '@reduxjs/toolkit';
    import counterReducer from './counterSlice';

    const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    });

    export default store;

# Step 3: Create a Slice
- create a slice for the counter in a new file called 'counterSlice.js' inside the 'redux' directory

    // src/redux/counterSlice.js
    import { createSlice } from '@reduxjs/toolkit';

    // Create a slice for the counter state
    const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
        state.value += 1;
        },
        decrement: (state) => {
        state.value -= 1;
        },
        reset: (state) => {
        state.value = 0;
        },
    },
    });

    // Export actions so they can be used in components
    export const { increment, decrement, reset } = counterSlice.actions;

    // Export reducer to be used in the store
    export default counterSlice.reducer;

# Step 4: Configure the React app with Redux
- make changes in 'src/index.js' where we will integrate the Redux store with React
    // src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    import { Provider } from 'react-redux';
    import store from './redux/store';

    // Wrap the App component with the Redux Provider to make the store accessible
    ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
    );

# Step 5: Create the React Component
- in 'src/App.js' use the Redux store to get and update the state
    // src/App.js
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { increment, decrement, reset } from './redux/counterSlice';

    function App() {
    // Get the current counter value from the Redux store
    const counter = useSelector((state) => state.counter.value);

    // Get the dispatch function to dispatch actions
    const dispatch = useDispatch();

    return (
        <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
    }

    export default App;
