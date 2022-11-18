import { useEffect, useState } from "react";

function LoadingRes({ loadingState, children }) {
  const [loading, setLoading] = useState(loadingState);

  useEffect(() => {
    setLoading(loadingState);
  }, [loadingState]);

  return (
    <>
      {loading ? (
        <div className="status-text">Loading...</div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default LoadingRes;
