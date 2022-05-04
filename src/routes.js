import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LicenseList from "./pages/MyAccount/components/LicenseList";
import Plans from "./pages/Plans";
import Register from "./pages/Register/Register";
import AppWrapper from "./_common/components/AppWrapper";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Plans />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/my-account" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/license-list" element={<LicenseList />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}
