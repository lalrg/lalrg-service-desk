import { Switch, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoggedInSelector } from "./store/selectors";

import Login from "./pages/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import CreateTicket from "./pages/CreateTicket";
import ViewTickets from "./pages/ViewTickets";
import TicketDetails from "./pages/TicketDetails";

const LoggedInSwitch = () => {
  return (
    <Switch>
      <Route path="/login">
        <CreateTicket />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/AddUser">
        <AddUser />
      </Route>
      <Route path="/updateuser/:id">
        <AddUser view="update" />
      </Route>
      <Route path="/MyProfile">
        <AddUser view="profile" />
      </Route>
      <Route path="/CreateTicket">
        <CreateTicket />
      </Route>
      <Route path="/Tickets">
        <ViewTickets view="all" />
      </Route>
      <Route path="/MyTickets">
        <ViewTickets view="my" />
      </Route>
      <Route path="/ClosedTickets">
        <ViewTickets view="closed" />
      </Route>
      <Route path="/TicketDetails/:id">
        <TicketDetails />
      </Route>
      <Route path="/">
        <CreateTicket />
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
