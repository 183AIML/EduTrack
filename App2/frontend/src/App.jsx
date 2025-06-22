import React from "react";
import Navbar from "./Navbar";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";
import "./styles/app.css";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <AppRouter />
      </main>
    </>
  );
}

export default App;
