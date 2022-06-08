import React, { useState } from "react";
import Timer from "./component/Timer";

function Cleanup() {
  const [showtimer, setShowtimer] = useState(false);
  return (
    <div>
      {showtimer && <Timer />}
      <button
        onClick={() => {
          setShowtimer(!showtimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
}

export default Cleanup;
