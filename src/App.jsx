import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
// import TourDetails from "./components/TourDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import TourDetails from "./components/TourDetails ";
import AuthSuccess from "./pages/AuthSuccess";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
