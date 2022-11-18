import { useRef, useEffect, useState, useCallback } from "react";
import { getUser } from "../../API/APIRequest";

import ErrMsg from "../Common/ErrMsg";
import TableHelper from "../TableHelper";
import LoadingRes from "../Common/LoadingRes";
import TotalRes from "../Common/TotalRes";

function GetUserByEmail() {
  const canSearchRef = useRef(true);
  const [user, setUserId] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("Andree.Flita@gmail.com");

  const [errMsg, setErrMsg] = useState("");

  const fetchUser = useCallback(async () => {
    if (!canSearchRef.current) return;

    setLoading(true);
    setErrMsg("");
    try {
      const {
        data: { allUsers, totalUsers },
      } = await getUser({ email: searchInput });

      setUserId(allUsers);
      setTotalUsers(totalUsers);
      setLoading(false);
    } catch (err) {
      setErrMsg(err?.response?.data?.message || true);
    }
    setLoading(false);
    canSearchRef.current = false;
  }, [searchInput]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const onSubmit = () => {
    canSearchRef.current = true;
    fetchUser();
  };

  return (
    <section className="page-temp">
      <h2 className="primary-page-head">Get User By Email</h2>
      <div className="page-content">
        <section className="search-bar-container">
          <input
            type="text"
            placeholder="Email..."
            className="search-bar"
            onChange={handleChange}
            value={searchInput}
          />
          <button type="button" className="search-button" onClick={onSubmit}>
            search
          </button>
        </section>
        {errMsg ? (
          <ErrMsg errMsg={errMsg} />
        ) : (
          <>
            <TotalRes loadingState={loading} totalRes={totalUsers} />
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

export default GetUserByEmail;
