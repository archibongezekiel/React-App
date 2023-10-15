import Input from "./input";
import Button from "./button";
function Next() {
  return <h1>Hello world</h1>;
}
function Back() {
  return <h1>Hello world</h1>;
}

function From() {
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p>Hello</p>
        <p>
          {" "}
          "ezekiel" === "ezekiel" ? <Next /> : <Back />;
        </p>
      </div>
    </>
  );
}

export default From;
