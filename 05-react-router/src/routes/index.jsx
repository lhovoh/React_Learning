import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NoFound from "../pages/NoFound";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";
import Setting from "../dashboard/Setting";
import Fans from "../profile/Fans";
import Follow from "../profile/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";

import NavBar from "../components/NavBar";
import BlogDetails from "../components/BlogDetails";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/blog/:blogIndex" element={<BlogDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Setting />} />
          <Route path="profile" element={<Profile />}>
            <Route path="follow" element={<Follow />} />
            <Route path="fans" element={<Fans />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
