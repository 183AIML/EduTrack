import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from './pages/Auth/Student/Login';
import StudentRegister from './pages/Auth/Student/Register';
import TeacherLogin from './pages/Auth/Teacher/Login';
import TeacherRegister from './pages/Auth/Teacher/Register';
import AdminLogin from './pages/Auth/Admin/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route path="/teacher/login" element={<TeacherLogin />} />
      <Route path="/teacher/register" element={<TeacherRegister />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
