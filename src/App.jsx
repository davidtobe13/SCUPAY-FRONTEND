import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./Components/Home/Home";
import { useState, useEffect } from "react";

import Loading from "./Components/Home/Loading";

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
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;