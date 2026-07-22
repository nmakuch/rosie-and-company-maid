import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import ScrollToLocation from "./components/ScrollToLocation/ScrollToLocation";

export default function App() {
    return (
        <>
            <ScrollToLocation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </>
    );
}