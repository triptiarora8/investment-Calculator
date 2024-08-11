import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const FirstInvestment =
    resultsData[0].valueEndOfYear
    - resultsData[0].interest -
    resultsData[0].AnnualInvestment;
  // console.log(resultsData);
  return (
    <section id='results-section'>
      <center>Results are...</center>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest </th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear
              - yearData.AnnualInvestment * yearData.year
              - FirstInvestment;

            const totalAmountInvested =
              yearData.valueEndOfYear - totalInterest;
            return <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          })}
        </tbody>

      </table>
    </section>
  )
}