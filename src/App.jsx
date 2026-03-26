import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TourDetails from "./components/TourDetails ";
import AdminDashboard from "./pages/AdminDashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* ADMIN */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;