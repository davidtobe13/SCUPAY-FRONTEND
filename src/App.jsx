// import { Routes, Route, HashRouter } from "react-router-dom"
// import { useState, useEffect } from "react";
// import Home from "./Components/Home/Home";
// import Getstarted from "./Components/Auth/Getstarted";


// import Loading from "./Components/Home/Loading";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time or use this for actual data fetching
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Shows loading spinner for 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/start" element={<Getstarted/>}/>
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

// export default App;


import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Getstarted from "./Components/Auth/Getstarted";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<Getstarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
