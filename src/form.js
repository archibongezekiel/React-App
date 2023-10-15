import Input from "./input";
import Button from "./button";

function From() {
  const blue = {
    color: "blue",
  };
  const red = {
    color: "red",
  };
  let classes = 2 == 2 ? { red } : { blue };
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p style={classes}>button</p>
      </div>
    </>
  );
}

export default From;
