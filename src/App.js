import React from "react";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
    return(
        <div className="body">
        <div className="wrapper">
        <Profile />
        <Main />
        <Footer />
        </div>
        </div>
    )
}

export default App;