import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Main } from "./components/Main";
import { NotSelectedPage } from "./components/NotSelectedPage";
import { ResultPage } from "./components/ResultPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result_page" element={<NotSelectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
