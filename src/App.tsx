import React, {Suspense, useContext, useState} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import MainPage from "./Pages/MainPage/MainPage";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {ThemeContext} from "./themes/ThemeContext";
import {useTheme} from "./themes/useTheme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`} >
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>} />
                <Route path={'/'} element={<MainPageAsync />}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;