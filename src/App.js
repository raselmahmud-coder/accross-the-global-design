import HomePage from "./components/NavBar/HomePage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
