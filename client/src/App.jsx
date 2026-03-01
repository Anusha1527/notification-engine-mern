import { BrowserRouter, Routes, Route } from "react-router-dom";

import SendNotification from "./pages/SendNotification";
import Logs from "./pages/Logs";
import Rules from "./pages/Rules";
import Analytics from "./pages/Analytics";
import Status from "./pages/Status";
import Explanation from "./pages/Explanation";

import Layout from "./components/Layout";
import { ToastProvider } from "./components/ToastContext";

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<SendNotification />} />
            <Route path="/send" element={<SendNotification />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/status" element={<Status />} />
            <Route path="/explanation/:id" element={<Explanation />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </BrowserRouter>
  );
}
