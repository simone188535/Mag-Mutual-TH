import { useEffect, useState } from "react";
import { getAllUsers } from "../../API/APIRequest";

import TableHelper from "../TableHelper";
import LoadingRes from "../Common/LoadingRes";

function GetAllUsers() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        data: { allUsers, totalUsers },
      } = await getAllUsers();

      setUsers(allUsers);
      setTotalUsers(totalUsers);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="page-temp">
      <h2 className="primary-page-head">Get all User</h2>
      <div className="page-content">
        {!loading && totalUsers >= 0 && (
          <div className="status-text">Total Results: {totalUsers}</div>
        )}
        <LoadingRes
          loadingState={loading}
          children={<TableHelper trow={users} />}
        />
      </div>
    </section>
  );
}

export default GetAllUsers;
