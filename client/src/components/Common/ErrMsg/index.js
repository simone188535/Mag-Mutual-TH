function ErrMsg({ errMsg }) {
  const errStr =
    errMsg.length > 0 ? errMsg : "Something went wrong. Please try again later";
  return (
    <>
      <div className="status-text">{errStr}</div>
    </>
  );
}

export default ErrMsg;
