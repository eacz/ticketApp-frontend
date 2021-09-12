import { Redirect, Route, Switch } from "react-router"
import CreateTicket from "../pages/CreateTicket"
import DeskPage from "../pages/DeskPage"
import LoginPage from "../pages/LoginPage"
import QueuePage from "../pages/QueuePage"

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/create" component={CreateTicket} />
      <Route path="/queue" component={QueuePage} />
      <Route path="/desk" component={DeskPage} />

      <Redirect to="/login" />
    </Switch>
  )
}

export default Routes
