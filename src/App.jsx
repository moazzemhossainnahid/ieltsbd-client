import { ToastContainer } from 'react-toastify'
import './App.css'
import AboutUS from './Pages/AboutUS/AboutUS'
import ContactUS from './Pages/ContactUS/ContactUS'
import Home from './Pages/Home/Home'
import InstructorDetails from './Pages/Instructors/InstructorDetails/InstructorDetails'
import Instructors from './Pages/Instructors/Instructors'
import Footer from './Pages/SharedPages/Footer/Footer'
import Header from './Pages/SharedPages/Header/Header'

function App() {

  return (
    <>
      <div className="App pt-20">
        <Header />
        {/* {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/approveposts' && window.location.pathname !== '/cpanel/unapproveposts') && <Header />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructor/:id" element={<InstructorDetails />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />

          {/* User Routes */}
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
          {/* <Route path="/mypost" element={<RequireAuth><MyPost /></RequireAuth>} /> */}

        </Routes>
        {/* {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/approveposts' && window.location.pathname !== '/cpanel/unapproveposts') && <Footer />} */}
        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
