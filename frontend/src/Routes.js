import { Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoggedInSelector } from "./store/selectors";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";

const LoggedInSwitch = () => {
  return (
    <Switch>
      <Route path="/login">
        <Home />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/AddUser">
        <AddUser />
      </Route>
      <Route path="/UpdateUser">
        <UpdateUser />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

const LoggedOutSwitch = () => {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};

const Routes = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  if (isLoggedIn) return <LoggedInSwitch />;
  return <LoggedOutSwitch />;
};

export default Routes;
