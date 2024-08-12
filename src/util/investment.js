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

export const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
