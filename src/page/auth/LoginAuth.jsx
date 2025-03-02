import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/store";
const LoginAuth = () => {
  const [LoginData, setLoginnData] = useState({
    username: "admin",
    password: "123456",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginnData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    if (LoginData.username === "admin" && LoginData.password === "123456") {
      dispatch(
        login({ username: LoginData.username, password: LoginData.password })
      ); // Dispatch login action
      console.log("cross");
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={LoginData.username}
        className="border p-2 mb-2"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={LoginData.password}
        className="border p-2 mb-2"
        onChange={handleChange}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  );
};

export default LoginAuth;
