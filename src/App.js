import { Global } from "@emotion/react";
import { reset } from "./style/common";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/userPage/HomePage/HomePage";
import UserMainLayout from "./components/usercomponents/UserMainLayout/UserMainLayout";

function App() {
    return (
        <>
            <Global styles={reset} />
            {/* user */}
            <UserMainLayout>
                <Routes>
                    <Route path="/*" element={<HomePage />}/>
                </Routes>
            </UserMainLayout>
        </>
    );
}

export default App;
