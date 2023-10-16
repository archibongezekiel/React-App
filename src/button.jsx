function handle() {
  alert("God did");
}
function Button() {
  const style = {
    outline: "none",
    border: "none",
    fontSize: "17px",
    color: "blue",
    background: "red",
  };
  return (
    <button style={style} onAuxClick={handle}>
      {" "}
      Submit
    </button>
  );
}

export default Button;
