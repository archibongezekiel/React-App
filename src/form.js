import Input from "./input";
import Button from "./button";

function From(p) {
  //   const red = {
  //     color: "red",
  //   };
  const blue = {
    color: "blue",
  };
  //   const c = 20 === 20 ? blue : red;
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p style={blue}>Hello</p>
        <p> </p>
      </div>
    </>
  );
}

export default From;
