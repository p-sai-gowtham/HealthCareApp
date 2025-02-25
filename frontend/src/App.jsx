import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "./components/UserNavbar";

const App = () => {
  return (
    <div className="bg-[#F8F9FD] flex justify-center items-center flex-col ">
      <ToastContainer />
      <UserNavbar />
      
    </div>
  )
};

export default App;
