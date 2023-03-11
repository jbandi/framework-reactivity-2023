import { useState } from "react";
import { Counter } from "./Counter";

export function Screen() {
  // DEMO:
  // const [name, setName] = useState("");
  //
  // function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setName(e.target.value);
  // }

  console.log("Render Screen", name);
  return (
    <div>
      <h3>React Demo</h3>
      {/*<input value={name} onChange={nameChange} />*/}
      {/*<h1>Hi, my name is {name}</h1>*/}
      <Counter />
    </div>
  );
}
