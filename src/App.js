import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./themes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import CalendarPage from "./pages/Calendar";
import Kanban from "./pages/KanbanBoard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Sidebar />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
