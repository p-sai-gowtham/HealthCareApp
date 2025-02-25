import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserNavbar from "./components/UserNavbar";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'

const App = () => {
  return (
    <div className="bg-[#F8F9FD] flex justify-center items-center flex-col ">
      <ToastContainer />
      <UserNavbar />
      
      <div className="flex items-start w-full ">
        <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/my-profile' element={<MyProfile />} />

        </Routes>
      </div>
    </div>
  )
};

export default App;
