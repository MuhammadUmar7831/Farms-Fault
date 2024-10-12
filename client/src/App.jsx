import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import ReportError from "./pages/ReportError";
import ViewMap from "./pages/ViewMap";
import { Toaster } from "react-hot-toast";
import ReportErrorConfirmation from "./pages/ReportErrorConfirmation";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/report-error" element={<ReportError />} />
            <Route path="/view-map" element={<ViewMap />} />
            <Route path="/report-confirmation" element={<ReportErrorConfirmation/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
