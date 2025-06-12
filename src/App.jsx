import React from "react";
import "./App.css";
import { ThemeProvider } from "../src/context/ThemeProvider";
import MainLayout from "./MainLayout"; // Separate component for consuming context

const App = () => {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
