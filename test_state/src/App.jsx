import { Suspense, useEffect, useReducer, useState } from "react";
import React from 'react';
import LazyLoad from 'react-lazyload';
// import the lazy-loaded component
import ItemList from './ItemList';

// a form that accepts a user's name and age and displays them
// function UserInfo(){
//   const[name, setName] = useState('');
//   const[age, setAge] = useState(0);

//   function handleNameChange(event){
//     setName(event.target.value);
//   }

//   function handleAgeChange(event){
//     setAge(parseInt(event.target.value));
//   }

//   return(
//     <div>
//       <form action="">
//         <label htmlFor="">
//           Name:
//           <input type="text" name="" id="" value={name} onChange={handleNameChange} />
//         </label>
//         <label htmlFor="">
//           Age:
//           <input type="text" value={age} onChange={handleAgeChange} />
//         </label>
//       </form>
//       <p> Your name is {name} and your age is {age} </p>
//     </div>
//   )
// }
// export default UserInfo


// global state example
// const App = () => {
//     const [darkMode, setDarkMode] = useState(false);
//     return (
//         <div>
//             <Home darkMode={darkMode} />
//             <Profile darkMode={darkMode} setDarkMode={setDarkMode}/>
//         </div>
//     );
// };
// export default App


// local state example
// const Profile = () => {
//      const[name, setName] = useState("Ramesh");
//      const toggleName = () => setName("Hira");

//      return(
//         <div>
//             <h1>hi i'm {name}</h1>
//             <button onClick={toggleName}>toggle name</button>
//         </div>
//      )
// }
// export default Profile


// state vs props example
// const App = () => {
//     //state
//     const[name, setName] = useState('rai');
//     //modify state
//     const changeName = () => setName('hari');

//     return(
//         <div>
//             <Profile name={name}/>
//             <button onClick={changeName}>click me</button>
//         </div>
//     );
// };
// //accepts name as props
// const Profile = ({ name }) => {
//     return(
//         <div>
//             <h1>hi i'm {name}</h1>
//             <p>welcome to all</p>
//         </div>
//     )
// }
// export default App


// display list items
// export default function App()
// {
//     const products = ["rice", "beans", "yam", "eggs"];
//     return(
//         <div>
//             <ul>
//                 {products.map((item, index) => (
//                 <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// working with to-do list that enables users to create and delete to-do items
// export default function App(){
//     const [todoList, setTodoList] = useState([]);
//     const [todo, setTodo] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();     //prevents the default action of the form (which is to refresh the page).
//         setTodoList([...todoList, { todo, id: Math.random() * 1000}]); //updates our todoList by adding a new object representing our task. The object contains the task (todo) and a random id
//         setTodo("");    //resets the todo to an empty string after adding the task
//     };

//     const handleDelete = (id) => {
//         const newTodoList = todoList.filter((item) => item.id !== id);
//         setTodoList(newTodoList);
// };
// return(
//     <div>
//         <h1>Todo List</h1>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text" name="toto" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} required />
//             <button type="submit">Add todo</button>
//         </form>
//         <div>
//             {todoList.map((item) => (
//                 <div key={item.id}>
//                     <p>{item.todo}</p>
//                     <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     </div>
// )
// }


// example of event handlers
// export default function App(){
//     const [todo, setTodo] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({todo});
//     };

//     return(
//         <div>
//             <h1>
//                 Todo list
//             </h1>
//             <form action="" onSubmit={handleSubmit}>
//                 <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)} required/>
//                 <button type="submit">Add Todo</button>
//             </form>
//         </div>
//     )
// }


// example of useEffect array 
// export default function Counter() {
//     const [count, setCount] = useState(0);

//     const increment = () => setCount( prev => prev + 1)
//     const decrement = () => setCount( prev => prev - 1)

//     // // without a dependency array
//     // useEffect(() => {
//     //     console.log("Run everytime count changes");
//     // });

//     // // with an empty dependency array
//     // useEffect(() => {
//     //     console.log("Run only once when component is mounted");
//     // },[]);
    
//     // with a dependency array containing values
//     useEffect(() => {
//         console.log("useEffect runs when the count changes");
//     }, [count]);
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <div>
//                 <button onClick={increment}>Increase</button>
//                 <button onClick={decrement}>Decrease</button>
//             </div>
//         </div>
//     );
// }


// reccreate the counter component using the useReducer hook
// declares the useReducer hook
// const [state, dispatch] = useReducer(reducer, {counter:0});

// reducer function which handles the state manipulation
// const reducer = (state, action) => {
//     switch(action.type){
//         case "increase": 
//             return {counter: state.counter + 1};
//         case "decrease":
//             return {counter : state.counter - 1};
//         default:
//             return state;
//     }
// }

//dispatch function that states the type of action and passes its value into the reducer function to enable it to carry out the required 
// task
// const increaseCounter = () => {
//      dispatch({type: "increase"});
// };

// const decreaseCounter = () => {
//     dispatch({type: "decrease"});
// };

// can also pass the data into the reducer function via the dispatch.
// e.g you can increase the counter by 2 by passing the data as a payload via the dispatch function
// const increaseBy2 = () => {
//     dispatch({type:"increaseBy2", payload:{number:2}})
// }

// const reducer = (state, action) => {
//         switch(action.type){
//             case "increase": 
//                 return {counter: state.counter + 1};
//             case "decrease":
//                 return {counter : state.counter - 1};
//             case "increaseBy2":
//                 return{counter: state.counter + action.payload.number}
//             default:
//                 return state;
//         }
//     }

// Lazyload example
// function App() {
//     return (
//         <div>
//             <h1>React Lazyload with API data example</h1>
//             {/* Use React Lazyload to lazy-load the component*/}
//             <LazyLoad height={200}>
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <ItemList />
//                 </Suspense>
//             </LazyLoad>
//         </div>
//     )
// }

// export default App;

// import List from './List';

// const App = () => {
//     const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

//     return(
//         <div>
//             <h1>Simple List Example</h1>
//             <List items={items} />
//         </div>
//     )
// }

// export default App;

// proptypes example
import UserCard from './UserCard';

const App = () => {
  return (
    <div>
      <h1>PropTypes Example</h1>
      <UserCard name='8' age={30} email="john@example.com" />
    </div>
  );
};

export default App;