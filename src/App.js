
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './Components/Footer/footer';

import { Header } from './Components/Header/header';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./Components/Theme/theme"
import {useState} from "react"

function App() {
  const [theme, setTheme] = useState("light");

const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header switchTheme={switchTheme}></Header>
  
      </ThemeProvider>
        
  );
}

export default App;
