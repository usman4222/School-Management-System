import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useState } from "react";

const Dashboard = lazy(() => import("./Pages/Dashboard/index.jsx"));

function App() {
  // const [loading, setloading] = useState(true);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            // </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;