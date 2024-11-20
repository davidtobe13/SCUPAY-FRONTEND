import { Routes, Route, HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Getstarted from "./Components/Auth/Getstarted";
import Loading from "./Components/Home/Loading";
import CreateAcct from "./Components/Auth/Management-Auth/CreateAcct";
import Dashboard from "./Components/Auth/Management-Auth/Management-dashboard/Dashboard";
import SchoolSignin from "./Components/Auth/Management-Auth/SchoolSignin";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or use this for actual data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Shows loading spinner for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Getstarted />} />
        <Route path="/auth/institution/signup" element={<CreateAcct />} />
        <Route path="/auth/institution/signin" element={<SchoolSignin />} />
        <Route path="/auth/institution/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
