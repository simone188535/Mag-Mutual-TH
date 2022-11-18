import { useEffect, useState } from "react";
import { getAllUsers } from "../../API/APIRequest";

import TableHelper from "../TableHelper";

function GetAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { allUsers },
      } = await getAllUsers();

      setUsers(allUsers);
    })();
  }, []);

  return (
    <section className="page-temp">
      <h2 className="primary-page-head">
        Get all User
      </h2>
      <TableHelper trow={users} />
    </section>
  );
}

export default GetAllUsers;
