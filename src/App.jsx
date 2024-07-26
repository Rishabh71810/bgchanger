
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './Context/Theme'
import Card from './components/Card'
import { useState ,useLayoutEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  //actual change in theme using  java script

  useLayoutEffect(() => {
   document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])

  return (
<ThemeProvider value ={{themeMode,lightTheme,darkTheme}}>{/*idhar dekh ye kuch ye methods ki koi functinality nahi hai to ham kya krenge ki isi same names ke method define krdenge upar usestate to uski functionality apne aap use main chali jayegi */  }
<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         <ThemeBtn /> 
      </div>

      <div className="w-full max-w-sm mx-auto">
       <Card />
      </div>
  </div>
</div>
</ThemeProvider>
  )
}

export default App 
