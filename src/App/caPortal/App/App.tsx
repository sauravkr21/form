import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../ca_components/homepage/About/About"
import Contact from "../ca_components/homepage/Contact/Contact";
import Incentives from "../ca_components/homepage/Incentives/Incentives";
import NavBar from "../ca_components/homepage/Navbar/Navbar";
import Sponsors from "../ca_components/homepage/Sponsors/Sponsors";

class App extends Component {
    render(): React.ReactNode {
        return (
            <>
            <Router>
                <div className="Navbar">
                    {/* Navbar component here */}
                    <NavBar/>
                    </div>
                    <div className="Routes-landing-page">
                        <Routes>
                            <Route path="/" element={<About textColor="blue" />} />
                            <Route path="about" element={<About textColor="#2B2B2B" />} />
                            <Route path="incentives" element={<Incentives/>}/>

                            <Route path="contact" element={<Contact/>}/>
                            <Route path="sponsors" element={<Sponsors/>}/>
                        </Routes>
    
                    </div>
            </Router>
            </>
        )
    }
}

export default App;