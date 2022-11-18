import { useEffect, useState } from "react";

function TotalRes({ loadingState, totalRes }) {
  const [loading, setLoading] = useState(loadingState);

  useEffect(() => {
    setLoading(loadingState);
  }, [loadingState]);

  return (
    <>
      {!loading && totalRes >= 0 && (
        <div className="status-text">Total Results: {totalRes}</div>
      )}
    </>
  );
}

export default TotalRes;
