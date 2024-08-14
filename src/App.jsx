import { useState } from "react";

import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Results from "./Component/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handelChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handelChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration grater than zero.</p>
      )}
    </>
  );
}

export default App;
