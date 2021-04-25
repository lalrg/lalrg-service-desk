import {
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Users from './pages/Users'
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";



const Routes = () => (
  <Switch>
    <Route path="/login">
      <Login />
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
)

export default Routes
