// Sustainability framework: adopted 2026-11-08, deployment/service clarification 2026-11-09.
// All EUR amounts are non-binding, VAT-exclusive planning references.
// Voluntary contributions never grant a licence, hosting, deployment or support hours.
// Professional deployment pays for service work; Studio and self-hosted server software stay free.
export const supportModel = {
  individualMonthlyEur: [3, 7, 14],
  suggestedOneTimeEur: [8, 28, 70],
  institutionalAnnualEur: [330, 660, 1650],
  deploymentEur: [690, 1490, 2990],
  annualCareEur: [390, 990, 1990],
} as const;
