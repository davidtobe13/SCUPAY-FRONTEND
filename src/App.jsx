import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Getstarted from "./Components/Auth/Getstarted";
import Loading from "./Components/Home/Loading";
import CreateAcct from "./Components/Auth/Management-Auth/CreateAcct";
import SchoolSignin from "./Components/Auth/Management-Auth/SchoolSignin";

// New Dashboard Components
// import ManagementLayout from "./Components/Auth/Management-Auth/Management-dashboard/Management-Layouts/ManagementLayout";
import ManagementOverview from "./Components/Auth/Management-Auth/Management-dashboard/ManagementOverview/ManagementOverview";
import ManagementActivitylog from "./Components/Auth/Management-Auth/Management-dashboard/ManagementActivitylog/ManagementActivitylog";
import ManagementStudents from "./Components/Auth/Management-Auth/Management-dashboard/ManagementStudents/ManagementStudents";
import ManagementUpdatefee from "./Components/Auth/Management-Auth/Management-dashboard/ManagementUpdatefee/ManagementUpdatefee";
import ManagementHelp from "./Components/Auth/Management-Auth/Management-dashboard/ManagementHelp/ManagementHelp";
import ManagementAnalytics from "./Components/Auth/Management-Auth/Management-dashboard/ManagementAnalytics/ManagementAnalytics";
import DashboardLayout from "./Components/Auth/Management-Auth/Management-dashboard/ManagementSidebar/ManagementSidebar";
import Cardprop from "./Components/Auth/Management-Auth/Management-dashboard/CardProps/Cardprop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Getstarted />} />
        <Route path="/auth/institution/signup" element={<CreateAcct />} />
        <Route path="/auth/institution/signin" element={<SchoolSignin />} />
        <Route path="/auth/card" element={<Cardprop />} />
        
        {/* Dashboard Routes */}
        <Route path="/auth/institution/dashboard" element={<DashboardLayout />}>
          <Route index element={<ManagementOverview />} />
          <Route path="/auth/institution/dashboard/activity" index element={<ManagementActivitylog />} />
          <Route path="/auth/institution/dashboard/manage-students" index element={<ManagementStudents />} />
          <Route path="/auth/institution/dashboard/update-fees" index element={<ManagementUpdatefee />} />
          <Route path="/auth/institution/dashboard/analytics" index element={<ManagementAnalytics />} />
          <Route path="/auth/institution/dashboard/help" index element={<ManagementHelp />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;