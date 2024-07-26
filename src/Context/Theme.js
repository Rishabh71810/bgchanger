import{ createContext , useContext} from "react"

export const ThemeContext = createContext({
    themeMode:"light",
    lightTheme : () => {},
    darkTheme: () =>{},

})

export const ThemeProvider =ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext) // kuch nhi hai bs theme context se sara context le rha hai
}//sara kaam ek hi file main hogya