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
    <section>
      <TableHelper trow={users}/>
    </section>
  );
}

export default GetAllUsers;
