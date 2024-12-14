import React, { useState } from 'react'
import { ThemeContext, themes } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Button from './components/Button'


const App = () => {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = () => {
    setTheme(state => (state === themes.light ? themes.dark : themes.light))
  }

  return (
    <div className='App'>
      {/* make theme and setTheme () available throughout our app via context */}
      <ThemeContext.Provider value={(theme)}>
        <Navbar />
        <Button changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;