import Input from "./input";
import Button from "./button";

function From(p) {
  const r = p.w;
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p>Hello</p>
        <p>{r === "ezekiel" ? <h1>Yes</h1> : <h5>no</h5>}</p>
      </div>
    </>
  );
}

export default From;
