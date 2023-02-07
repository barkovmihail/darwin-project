import React, {Suspense } from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../pages/AboutPage/ui/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/ui/MainPage.async";
import { classNames } from '../shared/lib/classNames/classNames';
import {useTheme} from "./providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import { MainPage } from 'pages/MainPage';
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])} >
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <AppRouter />
        </div>
    );
};

export default App;