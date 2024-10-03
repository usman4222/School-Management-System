import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
const Dashboard = lazy(() => import("./Pages/Dashboard/index.jsx"));
const Login = lazy(() => import("./Pages/Login.jsx"));
const ClassManagementPage = lazy(() =>
  import("./Pages/ClassManagementPage/index.jsx")
);
const SectionManagementPage = lazy(() =>
  import("./Pages/SectionManagementPage/index.jsx")
);
const SubjectManagementPage = lazy(() =>
  import("./Pages/SubjectManagementPage/index.jsx")
);
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadDashboard();
  }, []);

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
          <Route
            path="/admin/class-management"
            element={<ClassManagementPage />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/admin/section-management"
            element={<SectionManagementPage />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/admin/subject-management"
            element={<SubjectManagementPage />}
          />
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
