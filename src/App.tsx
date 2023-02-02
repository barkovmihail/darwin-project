import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import MainPage from "./Pages/MainPage/MainPage";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className="app">
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