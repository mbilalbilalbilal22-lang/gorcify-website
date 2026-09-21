import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
            {/* <Home /> */}
        </div>
    )
}

export default App