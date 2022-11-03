import React from "react";
import { useData } from "../Hooks/useData";
// import { Home } from "./Home";

export default function AdminLogin(states) {
 
  const [state] = useData(states)

  return (
<div>
    <table>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
    {/* <Home compare={state} /> */}
    </div>
  );
}
