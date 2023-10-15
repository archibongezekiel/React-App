import Input from "./input";
import Button from "./button";
function Next() {
  return <h1>Hello world</h1>;
}
function Back() {
  return <h1>Hello world</h1>;
}
function From() {
  let classes = "ezekiel" == "ezekiel" ? <Next /> : <Back />;
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p>{classes}</p>
      </div>
    </>
  );
}

export default From;
