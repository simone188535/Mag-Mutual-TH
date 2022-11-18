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
      <Route path={`${userPath}/:id`} component={GetUserById} />
      <Route path={`${userPath}/email`} component={GetUserByEmail} />
      <Route path={`${userPath}/date`} component={GetUsersInDateRange} />
      <Route path={`${userPath}/profession`} component={GetUserByProfession} />
      <Redirect path="/" exact from="/" to={`${userPath}`} component={GetAllUsers} />
    </Switch>
  )
}

export default AllRoutes;
