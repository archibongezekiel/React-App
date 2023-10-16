import Input from "./input";
import Button from "./button";
const buttonMap = [
  { id: 1, value: 0 },
  { id: 1, value: 0 },
];
let mapU = buttonMap.map((e) => <Button key={e.id} />);
function From() {
  return (
    <>
      <div>
        <Input />
        <br />
        <Button />
        <p>Hello</p>
        <p>world </p>
        <ul> {mapU}</ul>
      </div>
    </>
  );
}

export default From;
