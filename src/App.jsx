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
const AddSubjectPage = lazy(() => import("./Pages/AddSubjectPage/index.jsx"));
const AttendancePage1 = lazy(() => import("./Pages/AttendancePage/index1.jsx"));
const AttendancePage2 = lazy(() => import("./Pages/AttendancePage/index2.jsx"));
const AddTeacherPage = lazy(() =>
  import("./Pages/TeacherManagementPage/AddTeacherPage.jsx")
);
const TeacherManagementPage = lazy(() =>
  import("./Pages/TeacherManagementPage/index.jsx")
);
const EnrollmentPage = lazy(() =>
  import("./Pages/EnrollmentPage/index.jsx")
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
          <Route path="/admin/add-subject" element={<AddSubjectPage />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/attendance1" element={<AttendancePage1 />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/attendance2" element={<AttendancePage2 />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/admin/teacher-management"
            element={<TeacherManagementPage />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/add-teacher" element={<AddTeacherPage />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/enrollment" element={<EnrollmentPage />} />
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
