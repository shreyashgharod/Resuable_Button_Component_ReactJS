import "./styles.css";
import { Button } from "./Button";
import { Display } from "./Display";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = (incrementValue) => {
    setCount(count + incrementValue);
  };
  return (
    <div className="App">
      <div className="buttons">
        <Button onClickHandler={incrementCounter} increment={1} />
        <Button onClickHandler={incrementCounter} increment={10} />
        <Button onClickHandler={incrementCounter} increment={100} />
        <Button onClickHandler={incrementCounter} increment={1000} />
      </div>
      <div className="displayMsg">
        <Display message={count} />
      </div>
    </div>
  );
}
