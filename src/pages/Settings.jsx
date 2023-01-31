import { useState } from "react";
import SettingIcon from "../components/icons/SettingIcon";
import "../styles/settings.css";

export default function Settings() {
  const [test, setTest] = useState(false);
  const [arr, setArr] = useState([]);
  function add() {
    return arr.map((n, i) => (
      <div key={i}>
        <input type="text" />
        <input type="text" />
      </div>
    ));
  }
  return (
    <div className="pages setting">
      <div className="page_title">
        <SettingIcon />
        Тохиргоо
      </div>
      <div>
        <input
          type="button"
          value="click"
          onClick={() => {
            setTest(true);
            setArr([...arr, ""]);
          }}
        />
      </div>
      {test && add()}
    </div>
  );
}
