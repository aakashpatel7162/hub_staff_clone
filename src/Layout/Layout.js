import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import './layout.style.css'; // Import CSS for styling

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
