// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import CreateUser from './pages/admin/CreateUser';
import UpdateUser from './pages/admin/UpdateUser';
import UserList from './pages/admin/UserList';
import Login from './Login';
import OtpVerification from './OtpVerification';
import Dashboard from './pages/Dashboard';
import Employee from './pages/Employee';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Asset from './pages/Asset';
import Expense from './pages/Expense';
import Role from './pages/admin/Role';
import User from './pages/admin/User';

import Menu from './pages/admin/Menu';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex flex-1">
     <div className="hidden md:block">
    <Sidebar />
  </div>
  <main className="flex-grow p-6 bg-gray-100 overflow-auto">
    {children}
  </main>
    </div>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OtpVerification />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <ProtectedRoute>
            <Layout>
              <Employee />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Layout>
              <Attendance />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/leave"
        element={
          <ProtectedRoute>
            <Layout>
              <Leave />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/asset"
        element={
          <ProtectedRoute>
            <Layout>
              <Asset />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/expense"
        element={
          <ProtectedRoute>
            <Layout>
              <Expense />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/role"
        element={
          <ProtectedRoute>
            <Layout>
              <Role />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/user"
        element={
          <ProtectedRoute>
            <Layout>
              <User />
            </Layout>
          </ProtectedRoute>
        }
      />
       <Route path="/admin/user" element={<UserList />} />
      <Route path="/admin/user/create" element={<CreateUser />} />
      <Route path="/admin/user/update/:id" element={<UpdateUser />} />
      <Route
        path="/admin/menu"
        element={
          <ProtectedRoute>
            <Layout>
              <Menu />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default App;
