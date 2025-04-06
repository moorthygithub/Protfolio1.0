// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Home from "./page/Dashboard/Home";
// import LoginAuth from "./page/auth/LoginAuth";
// import Navbar from "./page/Navbar/Navbar";
// import Profile from "./page/Profile";

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={!isAuthenticated ? <LoginAuth /> : <Navigate to="/home" />}
//         />
//         <Route
//           path="/home"
//           element={isAuthenticated ? <Home /> : <Navigate to="/" />}
//         />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//       {isAuthenticated && <Navbar />}
//     </Router>
//   );
// }

// export default App;
// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./page/Dashboard/Home";
import LoginAuth from "./page/auth/LoginAuth";
import Navbar from "./page/Navbar/Navbar";
import Layout from "./page/Layout/Layout";
import Profile from "./page/Profile/Profile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <LoginAuth /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Layout>
                <Profile />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
