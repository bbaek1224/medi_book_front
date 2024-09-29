import { Global } from "@emotion/react";
import { reset } from "./style/common";
import MainLayout from "./components/MainLayout/MainLayout";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import StartPage from "./pages/StartPage/StartPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                <Routes>
                    <Route path="/" element={ <StartPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                </Routes>
            </MainLayout>
        </>
    );
}

export default App;
