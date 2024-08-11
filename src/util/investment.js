// This function expects a JS object as an argument
// The object should contain the following properties
// - FirstInvestment: The initial investment amount
// - AnnualInvestment: The amount invested every year
// - ExpectedReturn: The expected (annual) rate of return
// - Duration: The investment Duration (time frame)
export function calculateInvestmentResults({
  FirstInvestment,
  AnnualInvestment,
  ExpectedReturn,
  Duration,
}) {
  const annualData = [];
  let investmentValue = FirstInvestment;

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (ExpectedReturn / 100);
    investmentValue += interestEarnedInYear + AnnualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      AnnualInvestment: AnnualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
