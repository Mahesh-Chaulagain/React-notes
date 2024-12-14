// import { crateStore } from 'redux'; 
// import todos form './reducer';

// // create store
// const store = createStore(todos);

// import { applyMiddleware, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// // action types 
// const ADD_TODO = 'ADD_TODO';

// // action creators
// const addTodo = (text) => ({
//   type: ADD_TODO,
//   payload: text,
// });

// // reducer function
// const todos = (state = [], action) => {
//   switch(action.type){
//     case ADD_TODO:
//       return[...state, action.payload];
//     default:
//       return state;
//   }
// };