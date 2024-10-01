import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import ClassManagementPage from "./Pages/ClassManagementPage/index.jsx";
import Login from "./Pages/Login.jsx";

const Dashboard = lazy(() => import("./Pages/Dashboard/index.jsx"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a network request or loading time
    const loadDashboard = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1 second loading time
      setLoading(false); // Set loading to false once the component is loaded
    };

    loadDashboard();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/class-management" element={<ClassManagementPage />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
