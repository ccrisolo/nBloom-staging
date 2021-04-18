import { Switch, Route, useHistory, BrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainPage from "../Pages/MainPage";

function MainLayout() {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/dashboard" component={HomePage} />
                <Route path="/" exact component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainLayout
