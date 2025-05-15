import "./App.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(1);
    setStep(1);
  }

  return (
    <div className="App">
      <input
        value={step}
        type="range"
        min="0"
        max="10"
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      {step}
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${-count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 1 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
