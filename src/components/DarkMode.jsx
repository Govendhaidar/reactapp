import React, {  useEffect, useState } from 'react';
import imgRuta1 from '../assets/Logos/ruta1.svg'
import imgRuta2 from '../assets/Logos/ruta2.svg'
import imgRuta1dark from '../assets/Logos/ruta1-dark.svg'
import imgRuta2dark from '../assets/Logos/ruta2-dark.svg'
import imgSiliconLight from '../assets/Logos/Link.svg'
import imgSiliconDark from '../assets/Logos/silicon-light.svg'
import AppstoreLight from '../assets/Logos/appstore-light.svg'
import GoogleplayLight from '../assets/Logos/googleplay-light.svg'
import AppstoreDark from '../assets/Logos/appstore-dark.svg'
import GoogleplayDark from '../assets/Logos/googleplay-dark.svg'





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
        };
 
 useEffect(() => {
   const savedTheme = localStorage.getItem('theme')
   if(savedTheme === 'dark') {
   document.documentElement.setAttribute('data-theme', 'dark');
   setIsDarkMode(true)

  } else{
    document.documentElement.setAttribute('data-theme', 'light');
    setIsDarkMode(false)
  }

  const ruta1 = document.getElementById('ruta1');
        if (ruta1) {
            ruta1.src = isDarkMode ? imgRuta1dark : imgRuta1;
        }
        const ruta2 = document.getElementById('ruta2');
        if (ruta2) {
            ruta2.src = isDarkMode ? imgRuta2dark : imgRuta2;
        }

        
  const logo = document.getElementById('logo');
  if (logo) {
      logo.src = isDarkMode ? imgSiliconDark : imgSiliconLight;
  }

  const appStoreLogo = document.getElementById('appStoreLogo');
        if (appStoreLogo) {
            appStoreLogo.src = isDarkMode ? AppstoreDark : AppstoreLight;
        }
        const googlePlayLogo = document.getElementById('googlePlayLogo');
        if (googlePlayLogo) {
            googlePlayLogo.src = isDarkMode ? GoogleplayDark : GoogleplayLight;
        }

 

      

 }, [isDarkMode]) 

       
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
  );
};

export default DarkMode;