import {createContext} from 'react'
const ThemeContext = createContext({
    color: 'white',
    setColor : (color) => {}
})
export default ThemeContext