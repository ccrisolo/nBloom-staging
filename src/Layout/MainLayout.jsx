import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Login from "../Components/AccountPage/Login";
import Signup from "../Components/AccountPage/Signup";
import Singup1 from "../Components/AccountPage/Signup1";
import Signup2 from "../Components/AccountPage/Signup2";
import AccountPage from "../Pages/Auth/AccountPage";
import Coach from "../Pages/Coach";
import HomePage from "../Pages/HomePage";
import MainPage from "../Pages/MainPage";
import history from '../history'
import CoachCreate from "../Pages/CoachCreate";
import Header from "../Components/Header";
import CoachCreate1 from "../Components/CoachCreate/CoachCreate1";
import CoachCreate2 from "../Components/CoachCreate/CoachCreate2";
import CoachCreate3 from "../Components/CoachCreate/CoachCreate3";
import CoachCreate4 from "../Components/CoachCreate/CoachCreate4";
import CoachProfile from "../Pages/CoachProfile";
import Consult from "../Pages/Consult";

function MainLayout() {
    return (
        <BrowserRouter history={history}>
            <Header />
            <div style={{height:60}}/>
            <Routes >
                <Route path="/dashboard" element={<HomePage />} />
                <Route path="/consult" element={<Consult />} />
                <Route path="/coach" element={<Coach />} />
                <Route path="/coach/create" element={<CoachCreate />}>
                    <Route path={`/step_1`} element={<CoachCreate1 />} />
                    <Route path={`/step_2`} element={<CoachCreate2 />} />
                    <Route path={`/step_3`} element={<CoachCreate3 />} />
                    <Route path={`/step_4`} element={<CoachCreate4 />} />
                </Route>
                <Route path="/coach/profile" element={<CoachProfile />} />
                <Route path="/auth" exact element={<AccountPage />} >
                    <Route path={`/signup_1`} element={<Signup />} />
                    <Route path={`/signup_2`} element={<Singup1 />} />
                    <Route path={`/signup_3`} element={<Signup2 />} />
                    <Route path={`/`} element={<Login />} />
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainLayout
