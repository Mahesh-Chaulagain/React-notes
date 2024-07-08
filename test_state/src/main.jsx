import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Base.jsx'
import Blog from './Blogs.jsx'
import './index.css'
import CounterInline from './CounterInline.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Home /> */}
    {/* <Blog title={'ram'} content={'ok fine thank you'} date={'2020/02/01'}/>  */}
    {/* <CounterInline /> */}
  </React.StrictMode>,
)
