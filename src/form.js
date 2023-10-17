// import Input from "./input";
import Button from "./button";

function From() {
  const buttonMap = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  const handleDelete = (e) => alert("working", e);
  return (
    <>
      <div>
        <div>
          {buttonMap.map((e) => (
            <Button key={e.id} OnDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

export default From;
