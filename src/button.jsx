import { useState } from "react";

function Button(props) {
  const [count, keepCount] = useState(0);
  const handle = () => {
    keepCount(count + 1);
  };
  const style = {
    outline: "none",
    border: "none",
    fontSize: "17px",
    color: "white",
    background: "green",
  };
  const style1 = {
    outline: "none",
    border: "none",
    fontSize: "17px",
    color: "white",
    background: "red",
  };

  return (
    <>
      {" "}
      <p>{count}</p>
      <button style={style} onClick={handle}>
        {" "}
        Submit
      </button>
      <button style={style1} onClick={() => props.OnDelete(props.id)}>
        Delete
      </button>
    </>
  );
}

export default Button;
