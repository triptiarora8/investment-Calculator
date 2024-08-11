import React, { useState } from 'react';
import Results from "./Results";

export default function Input({ onChangeInput, userInput }) {
    const [showResults, setShowResults] = useState(false);

    function handleButton() {
        if (validDuration) {
            setShowResults(true);
            setTimeout(() => {
                document.getElementById("results-section").scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }

    const validDuration = userInput.Duration >= 1
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>First investment</label>
                    <input type='number'
                        value={userInput.FirstInvestment}
                        onChange={(event) => onChangeInput('FirstInvestment', event.target.value)}
                        required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number'
                        value={userInput.AnnualInvestment}
                        onChange={(event) => onChangeInput('AnnualInvestment', event.target.value)}
                        required />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return(rate of return)</label>
                    <input type='number'
                        value={userInput.ExpectedReturn}
                        onChange={(event) => onChangeInput('ExpectedReturn', event.target.value)}
                        required />
                </p>
                <p>
                    <label>Duration (Time)</label>
                    <input type='number'
                        value={userInput.Duration}
                        onChange={(event) => onChangeInput('Duration', event.target.value)}
                        required />
                    {!validDuration && <p id="validDuration">Enter a valid duration</p>}
                </p>
            </div>
            <button id='button' onClick={handleButton}>
                Show Results
            </button>
            {showResults && validDuration && <Results input={userInput} />}

        </section>
    )
}
