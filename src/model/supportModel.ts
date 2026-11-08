// Agreed starting framework, 2026-11-08. Review against actual costs and capacity.
// HUF reference amounts are not payment-provider tiers or a service contract.
export const supportModel = {
  individualMonthlyHuf: [1000, 2500, 5000],
  suggestedOneTimeHuf: [3000, 10000, 25000],
  institutionalAnnualHuf: [120000, 240000, 600000],
  servicesHuf: [36000, 108000, 72000, 54000],
  additionalHourlyHuf: 18000,
  monthlyCareHuf: 65000,
} as const;
