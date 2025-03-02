import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* Nested Routes inside DashBoard */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<DashboardPage />} />  {/* Default Page */}
          <Route path="orders" element={<OrdersPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
