// import { useSelector } from "react-redux";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import Home from "./page/Dashboard/Home";
// import Layout from "./page/Layout/Layout";
// import Profile from "./page/Profile/Profile";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/profile"
//           element={
//             <Layout>
//               <Profile />
//             </Layout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./page/Dashboard/Home";
import Layout from "./page/Layout/Layout";
import Profile from "./page/Profile/Profile";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Toaster position="top-right" />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
