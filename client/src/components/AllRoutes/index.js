import { Switch, Route } from "react-router-dom";

import GetAllUsers from '../GetAllUsers';
import GetUserById from "../GetUserById";
import GetUserByEmail from "../GetUserByEmail";
import GetUsersInDateRange from "../GetUsersInDateRange";
import GetUserByProfession from "../GetUserByProfession";

function AllRoutes() {
  return (
    <Switch>
      <Route path="/:id" component={GetUserById} />
      <Route path="/email" component={GetUserByEmail} />
      <Route path="/date" component={GetUsersInDateRange} />
      <Route path="/profession" component={GetUserByProfession} />
      <Route path="/" component={GetAllUsers} />
    </Switch>
  )
}

export default AllRoutes;
