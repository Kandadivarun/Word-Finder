import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Image from './Components/Image';
import react from "react";
// import Todo from './Components/Todo';
import { Route, Routes } from "react-router-dom";
// import BlurExp from './pages/BlurExp';
// import TodoPage from './pages/MainContent';
import "./styles/output.css";
// import MainPage from './Components/layout/MainLayoutPage';
// import AboutPage from './pages/About';
import "rsuite/dist/rsuite.min.css";
import HomePage from "./Components/HomePage";

function App() {
    return (
        // <Routes>
        //   <Route path='/' element={<TodoPage/>}>
        //   </Route>
        //   <Route path='/blurExp'>
        //     <BlurExp></BlurExp>
        //   </Route>
        // </Routes>
        <div>
            {/* <MainPage></MainPage> */}
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                {/* <Route path='/' element={<TodoPage/>}></Route>
        <Route path='/to-do' element={<Todo/>}></Route>
        <Route path='/blurExp' element={<BlurExp/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route> */}
            </Routes>
            {/* <Todo></Todo>
      <BlurExp></BlurExp> */}
        </div>
    );
}

export default App;
