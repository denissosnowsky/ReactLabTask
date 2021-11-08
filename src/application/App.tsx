import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorView from "./pages/DoctorView/DoctorView";
import RestorePass from "./pages/RestorePass/RestorePass";
import RestorePassSent from "./pages/RestorePassSent/RestorePassSent";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { routes } from "../routes/routes";
import UserView from "./pages/UserView/UserView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.signUp} element={<SignUp />} />
        <Route path={routes.signIn} element={<SignIn />} />
        <Route path={routes.restorePass} element={<RestorePass />} />
        <Route path={routes.restorePassSent} element={<RestorePassSent />} />
        <Route path={routes.doctorView} element={<DoctorView />} />
        <Route path={routes.userView} element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
