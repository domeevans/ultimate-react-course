import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did person 1 find the service{" "}
      </SelectPercentage>

      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did person 2 find the service{" "}
      </SelectPercentage>
      {bill > 0 ? (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      ) : null}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  function handleOnChange(value) {
    const billValue = Number(value);
    console.log(value);
    console.log(billValue);
    if (!isNaN(billValue)) {
      onSetBill(billValue);
    } else {
      alert("Invalid bill value. It has been reset");
      onSetBill("");
    }
  }
  return (
    <div>
      <label>How much was the bill: </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Disatisfied (0%)</option>
        <option value="5">Average (5%)</option>
        <option value="10">Satisfied (10%)</option>
        <option value="20">Very Satisfied (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay €{bill + tip} (€{bill} + €{tip})
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
