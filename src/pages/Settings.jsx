import { useState } from "react";
import SettingIcon from "../components/icons/SettingIcon";
import "../styles/settings.css";

export default function Settings() {
  const [test, setTest] = useState(false);
  const [arr, setArr] = useState([]);
  const [spec, setSpec] = useState([]);

  function add() {
    return arr.map((n, i) => (
      <div key={i}>
        <input type="text" name="specName" />
        <input type="text" name="specVal" />
      </div>
    ));
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(e.target.specName.value);
    for (let i = 0; i < arr.length; i++) {
      setSpec([...spec, e.target.specName.value]);
    }
    console.log(spec);
  }

  return (
    <div className="pages setting">
      <div className="page_title">
        <SettingIcon />
        Тохиргоо
      </div>
      <form onSubmit={submitHandler}>
        {test && add()}
        <input
          type="button"
          value="click"
          onClick={() => {
            setTest(true);
            setArr([...arr, ""]);
          }}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
