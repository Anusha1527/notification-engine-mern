import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SendNotification from "./pages/SendNotification";
import Logs from "./pages/Login";
import Rules from "./pages/Rules";
import Analytics from "./pages/Analytics";
import Status from "./pages/Status";
import Explanation from "./pages/Explanation";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { ToastProvider } from "./components/ToastContext";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>

          {/* Login Route (NO Layout) */}
          <Route path="/login" element={<Login />} />

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Protected Routes (WITH Layout) */}
          <Route
            path="/send"
            element={
              <Layout>
                <SendNotification />
              </Layout>
            }
          />

          <Route
            path="/logs"
            element={
              <Layout>
                <Logs />
              </Layout>
            }
          />

          <Route
            path="/rules"
            element={
              <Layout>
                <Rules />
              </Layout>
            }
          />

          <Route
            path="/analytics"
            element={
              <Layout>
                <Analytics />
              </Layout>
            }
          />

          <Route
            path="/status"
            element={
              <Layout>
                <Status />
              </Layout>
            }
          />

          <Route
            path="/explanation/:id"
            element={
              <Layout>
                <Explanation />
              </Layout>
            }
          />

        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}