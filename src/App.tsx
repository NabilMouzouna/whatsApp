import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import LoginUI from "./components/Authentication/login/Login";
import RegisterUI from "./components/Authentication/register/Register";
import Main from "./components/Main";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginUI/>}/>
      <Route path="/register" element={<RegisterUI/>}/>
      <Route path="*" element={<ProtectedRoute><Main/></ProtectedRoute>}/>
    </Routes>
  );
}

export default App;
