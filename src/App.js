import React from "react";
import Navbar from "./components/Navbar/Navbar";  
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";  
import SignUp from "./pages/signup";
import Register from "./pages/registration";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
             <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
 
export default App;