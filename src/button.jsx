import { useState } from "react";

function Button() {
  const [count, keepCount] = useState(0);
  const handle = () => {
    keepCount(count + 1);
  };
  const style = {
    outline: "none",
    border: "none",
    fontSize: "17px",
    color: "blue",
    background: "red",
  };

  return (
    <>
      <button style={style} onClick={handle}>
        {" "}
        Submit
      </button>
      <p>{count}</p>
    </>
  );
}

export default Button;
