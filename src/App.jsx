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
const EnrollmentPage = lazy(() => import("./Pages/EnrollmentPage/index.jsx"));
const AddStudent = lazy(() => import("./Pages/EnrollmentPage/AddStudent.jsx"));
const StudentInformation = lazy(() =>
  import("./Pages/EnrollmentPage/StudentInformation.jsx")
);
const AcademicsPage = lazy(() => import("./Pages/AcademicsPage/index.jsx"));
const AllStudent = lazy(() => import("./Pages/Students/AllStudent.jsx"));
const AddEnrollmentInfo = lazy(() =>
  import("./Pages/Students/AddEnrollmentInfo.jsx")
);
const ViewStudent = lazy(() => import("./Pages/Students/ViewStudent.jsx"));
const StudentReport = lazy(() => import("./Pages/StudentReport/index.jsx"));
const AccountsOfficePage = lazy(() =>
  import("./Pages/AccountsOfficePage/index.jsx")
);
const FeeCollectionTable = lazy(() =>
  import(
    "./Components/Tables/AccountsOfficeTables/FeeCollectionTable/index.jsx"
  )
);
const ReportTable = lazy(() =>
  import("./Components/Tables/AccountsOfficeTables/ReportTable/index.jsx")
);
const ExamDepartment = lazy(() => import("./Pages/ExamDepartment/index.jsx"));
const AddResult = lazy(() => import("./Pages/ExamDepartment/AddResult.jsx"));
const ViewResult = lazy(() => import("./Pages/ExamDepartment/ViewResult.jsx"));
const AttendanceDateSheet = lazy(() =>
  import("./Pages/ExamDepartment/AttendanceDateSheet.jsx")
);
const DateSheet = lazy(() => import("./Pages/ExamDepartment/DateSheet.jsx"));
const HostelManagementPage = lazy(() =>
  import("./Pages/HostelManagementPage/index.jsx")
);
const Students = lazy(() =>
  import("./Pages/HostelManagementPage/Students.jsx")
);
const Rooms = lazy(() =>
  import("./Pages/HostelManagementPage/Rooms.jsx")
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
    student - info;
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
          <Route path="/admin/student-report" element={<StudentReport />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/academics/students" element={<AcademicsPage />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/exam-department/result" element={<ExamDepartment />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/exam-department/exam-attendance-sheet"
            element={<AttendanceDateSheet />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/exam-department/view-result" element={<ViewResult />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/exam-department/date-sheet" element={<DateSheet />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/hostel-management/pending-student"
            element={<HostelManagementPage />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/hostel-management/students" element={<Students />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/hostel-management/rooms" element={<Rooms />} />
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
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/student-info" element={<StudentInformation />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/accounts-office/fee-structure"
            element={<AccountsOfficePage />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/accounts-office/fee-collection"
            element={<FeeCollectionTable />}
          />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/accounts-office/report" element={<ReportTable />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/all-students" element={<AllStudent />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/add-result" element={<AddResult />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/all-students" element={<AllStudent />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/add-enrollment" element={<AddEnrollmentInfo />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/view-student" element={<ViewStudent />} />
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
