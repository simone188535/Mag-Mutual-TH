import moment from "moment";

const tableHead = [
  "Id",
  "First Name",
  "Last Name",
  "Email",
  "Profession",
  "Date Created",
  "Country",
  "City",
];

function TableHelper({ trow, className = "" }) {
  return (
    <section className={`table ${className}`}>
      <section className="table-body">
        <div className="row-items table-head">
          {tableHead.map((item, index) => (
            <div className="row-item" key={`table-head-${index}`}>
              {item}
            </div>
          ))}
        </div>
        {trow?.map(
          ({
            id,
            firstname,
            lastname,
            email,
            profession,
            datecreated,
            country,
            city,
          }) => (
            <div className="row-items" key={`table-body-${id}`}>
              <div className="row-item">{id}</div>
              <div className="row-item">{firstname}</div>
              <div className="row-item">{lastname}</div>
              <div className="row-item">{email}</div>
              <div className="row-item">{profession}</div>
              <div className="row-item">{moment(datecreated).format("MM-DD-YYYY")}</div>
              <div className="row-item">{country}</div>
              <div className="row-item">{city}</div>
            </div>
          )
        )}
      </section>
    </section>
  );
}

export default TableHelper;
