import { useEffect, useState } from "react";
import { getUsersBetweenDates } from "../../API/APIRequest";
import DatePicker from "react-datepicker";

import TableHelper from "../TableHelper";
import LoadingRes from "../Common/LoadingRes";
import TotalRes from "../Common/TotalRes";
import ErrMsg from "../Common/ErrMsg";

import "react-datepicker/dist/react-datepicker.css";

function GetUsersInDateRange() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [dateRange, setDateRange] = useState({
    from: new Date("8-31-2020"),
    to: new Date("4-24-2021"),
  });

  const fromOnChange = (date) =>
    setDateRange((prevState) => ({
      ...prevState,
      from: date,
    }));

  const toOnChange = (date) =>
    setDateRange((prevState) => ({
      ...prevState,
      to: date,
    }));

  useEffect(() => {
    (async () => {
      setLoading(true);
      setErrMsg("");
      try {
        const {
          data: { allUsers, totalUsersInRange },
        } = await getUsersBetweenDates({
          to: dateRange.to,
          from: dateRange.from,
        });

        setUsers(allUsers);
        setTotalUsers(totalUsersInRange);
        setLoading(false);
      } catch (err) {
        setErrMsg(err?.response?.data?.message || true);
      }
      setLoading(false);
    })();
  }, [dateRange]);

  return (
    <section className="page-temp">
      <h2 className="primary-page-head">Get Users In Date Range</h2>
      <div className="page-content">
        <div className="date-picker-container">
          <div className="date-picker-option">
            From:{" "}
            <DatePicker selected={dateRange.from} onChange={fromOnChange} />
          </div>
          <div className="date-picker-option">
            To: <DatePicker selected={dateRange.to} onChange={toOnChange} />
          </div>
        </div>
        {errMsg ? (
          <ErrMsg errMsg={errMsg} />
        ) : (
          <>
            <TotalRes loadingState={loading} totalRes={totalUsers} />
            <LoadingRes
              loadingState={loading}
              children={<TableHelper trow={users} />}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default GetUsersInDateRange;
