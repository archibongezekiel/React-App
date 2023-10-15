import Input from "./input";
import Button from "./button";

function From() {
  const image = "im.jpeg";

  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <img src={image} />
      </div>
    </>
  );
}

export default From;
