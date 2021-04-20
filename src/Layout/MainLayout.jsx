import { Switch, Route, useHistory, BrowserRouter } from "react-router-dom";
import AccountPage from "../Pages/Auth/AccountPage";
import CoachProfile from "../Pages/CoachProfile";
import HomePage from "../Pages/HomePage";
import MainPage from "../Pages/MainPage";

function MainLayout() {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/dashboard" component={HomePage} />
                <Route path="/coach/create" component={CoachProfile} />
                <Route path="/" exact component={AccountPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainLayout
