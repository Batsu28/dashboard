import Dropdown from "react-bootstrap/Dropdown";

export default function Drop(prop) {
  const { name } = prop;
  return (
    <Dropdown>
      <Dropdown.Menu>
        <Dropdown.Item></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
