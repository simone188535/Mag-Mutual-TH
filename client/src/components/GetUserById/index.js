import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../API/APIRequest";

import TableHelper from "../TableHelper";
import LoadingRes from "../Common/LoadingRes";
import TotalRes from "../Common/TotalRes";
import ErrMsg from "../Common/ErrMsg";

function GetUserById() {
  let { id } = useParams();
  const [user, setUserId] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { allUsers, totalUsers },
        } = await getUser({ id: Number(id) });

        setUserId(allUsers);
        setTotalUsers(totalUsers);
        setLoading(false);
      } catch (err) {
        setErrMsg(
          err?.response?.data?.message || true
        );
      }
    })();
  }, [id]);

  return (
    <section className="page-temp">
      <h2 className="primary-page-head">Get User By Id</h2>
      <div className="page-content">
        {errMsg ? (
          <ErrMsg errMsg={errMsg}/>
        ) : (
          <>
            <TotalRes loadingState={loading} totalRes={totalUsers}/>
            <LoadingRes
              loadingState={loading}
              children={<TableHelper trow={user} />}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default GetUserById;
