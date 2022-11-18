import { Switch, Route, Redirect } from "react-router-dom";

import GetAllUsers from '../GetAllUsers';
import GetUserById from "../GetUserById";
import GetUserByEmail from "../GetUserByEmail";
import GetUsersInDateRange from "../GetUsersInDateRange";
import GetUserByProfession from "../GetUserByProfession";

function AllRoutes() {
    const userPath = '/users'; 
  return (
    <Switch>
      <Route path={`${userPath}/email`} component={GetUserByEmail} />
      <Route path={`${userPath}/date`} component={GetUsersInDateRange} />
      <Route path={`${userPath}/profession`} component={GetUserByProfession} />
      <Route path={`${userPath}/:id`} component={GetUserById} />
      <Redirect path="/" exact from="/" to={`${userPath}`} />
      <Route path={`${userPath}`} component={GetAllUsers} />
    </Switch>
  )
}

export default AllRoutes;
