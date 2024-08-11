import { useState } from "react";
import Input from "./components/Input";


function App() {
  const [userInput, setuserInput] = useState(
    {
      FirstInvestment: 100000,
      AnnualInvestment: 12000,
      ExpectedReturn: 10, //10%
      Duration: 5 //5 years
    }
  );

  function handleChange(inputIdentifier, newValue) {
    setuserInput(previousDataValue => {
      return {
        ...previousDataValue,
        [inputIdentifier]: +newValue
      }
    })
  }
  // const validDuration = userInput.Duration >= 1
  return (
    <>
      <Input userInput={userInput} onChangeInput={handleChange} />
    </>
  )
}

export default App
