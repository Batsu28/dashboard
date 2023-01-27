import axios from "axios";
import { useEffect, useState } from "react";
import UsersIcon from "../components/icons/UsersIcon";
import "../styles/users.css";

export default function Users() {
  const [tests, setTests] = useState("");

  const [getID, setGetId] = useState("");
  console.log(getID);
  useEffect(() => {
    axios.get("http://localhost:2000/test").then((res) => setTests(res.data));
  }, []);

  function postName(e) {
    e.preventDefault();
    console.log(e.target.name.value);

    axios
      .post("http://localhost:2000/test", {
        name: `${e.target.name.value}`,
      })
      .then((res) => console.log(res))
      .catch((res) => console.error(res));
    location.reload();
  }
  function dlt(id) {
    console.log(id);
    axios
      .delete(`http://localhost:2000/test/${id}`)
      .then((res) => console.log(res))
      .catch((res) => console.error(res));
    location.reload();
  }
  function patch(e) {
    e.preventDefault();
    axios.patch(`http://localhost:2000/test/${getID}`, {
      name: `${e.target.patch.value}`,
      id: getID,
    });
    location.reload();
  }
  return (
    <div className="pages users">
      <div className="page_title">
        <UsersIcon />
        Хэрэглэгчид
      </div>
      <form onSubmit={postName}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
      <div>
        {tests &&
          tests.map((test) => (
            <div onClick={(e) => setGetId(e.target.id)} id={test.id}>
              {test.name}
            </div>
          ))}
      </div>
      <form onSubmit={patch}>
        <input type="text" name="patch" />
        <button type="submit">hhh</button>
      </form>
      <input type="button" value="del" onClick={() => dlt(getID)} />
    </div>
  );
}
