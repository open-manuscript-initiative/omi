// Agreed starting framework, 2026-11-08. Review against actual costs and capacity.
// EUR contribution references rounded from the former HUF amounts at 1 EUR = 363.90 HUF.
// ECB reference rate, 2026-11-06: https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html
// Service planning amounts remain in HUF. References are not provider tiers or contracts.
export const supportModel = {
  individualMonthlyEur: [3, 7, 14],
  suggestedOneTimeEur: [8, 28, 70],
  institutionalAnnualEur: [330, 660, 1650],
  servicesHuf: [36000, 108000, 72000, 54000],
  additionalHourlyHuf: 18000,
  monthlyCareHuf: 65000,
} as const;
