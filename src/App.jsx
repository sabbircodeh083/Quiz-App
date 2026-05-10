import Layout from "./conponents/layout";
import "./style/global.css";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import Result from "./pages/result";
import { useAuth } from "./contexts/authContext";
import { Navigate } from "react-router-dom";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
function App() {
  const {currentUser}=useAuth();

  return(
    <>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={!currentUser?<Signup/>: <Navigate to="/" />}/>
              <Route path="/login" element={!currentUser?<Login/>: <Navigate to="/" />}/>
              <Route path="/quiz/:id" element={currentUser? <Quiz/>: <Navigate to="/login" />}/>
              <Route path="/result/:id" element={currentUser? <Result/>: <Navigate to="/login" />}/>
              <Route path="*" element={<h1 className="error"> 404 <br/>The Page is not found</h1>} />
            </Routes>
          </Layout>
    </>
  )
}
export default App
