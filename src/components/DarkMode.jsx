import React, { useState } from 'react';



const DarkMode = () => {
        const [isDarkMode, setIsDarkMode] = useState(false);
        const toggleDarkMode = () => {
          const newMode = !isDarkMode; 
          setIsDarkMode(newMode)

          if(newMode){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');

          } else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
          }
        }
 


       
  return (
    <div className="btn-toggle-switch">
        <span className="label">dark mode</span>
        <label htmlFor="switchMode" className="toggle-switch">
        <input
        id="switchMode"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        // aria-label="dark-mode input toggle"
        />
        <span className="slider round"></span>

    </label>
</div>
  )
}

export default DarkMode