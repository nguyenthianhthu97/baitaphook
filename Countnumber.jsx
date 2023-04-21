import React, { useState } from "react";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Bấm vào tôi</button>
    </div>
  );
}
