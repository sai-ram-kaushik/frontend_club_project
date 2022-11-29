import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Main } from "./components/Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
