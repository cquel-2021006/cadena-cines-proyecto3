import React from "react";
import { LoginPage } from "./login/components/LoginPage";
import { Movie } from "./movie/movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/movie" element={<Movie />}/>
      </Routes>
    </BrowserRouter>
  )
}