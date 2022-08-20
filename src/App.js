import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
function App() {
  return (
    <>
      <NavBar />
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
