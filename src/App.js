import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/userPage/HomePage/HomePage";
import AdminDashBoard from "./pages/adminPage/AdminDashBoard/AdminDashBoard";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path='/admin/*' element={<AdminDashBoard />} />
            </Routes>
        </>
    );
}

export default App;
