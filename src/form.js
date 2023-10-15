import Input from "./input";
import Button from "./button";

function From() {
  const red = {
    color: "red",
  };
  const blue = {
    color: "green",
  };
  const c = 20 ? blue.color : red.color;
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p style={c}>Hello</p>
        <p> </p>
      </div>
    </>
  );
}

export default From;
