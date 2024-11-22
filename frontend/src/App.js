import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offerings from "./components/Offerings";
import EventPage from "./components/EventPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Offerings />} />
                <Route path="/event/:id" element={<EventPage />} />
            </Routes>
        </Router>
    );
}

export default App;
