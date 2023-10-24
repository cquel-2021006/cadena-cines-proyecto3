import React from "react";
import { LoginPage } from "./login/components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MoviePage } from "./movie/components/MoviePage";
import { UserPage } from "./movie/components/UserPage";
import { TicketPage } from "./movie/components/ticketPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MoviePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  )
}