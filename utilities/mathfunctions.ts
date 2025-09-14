import { InterestParams } from "./types";


export function calculateInterest({ principal, rate, duration, time = 1 }: InterestParams): number {
  if (principal <= 0 || rate < 0 || time <= 0) {
    throw new Error('Invalid input: Principal, rate, and time must be positive numbers.');
  }

  let periodsPerYear: number;
  switch (duration) {
    case 'Daily':
      periodsPerYear = 365;
      break;
    case 'Monthly':
      periodsPerYear = 12;
      break;
    case 'Yearly':
      periodsPerYear = 1;
      break;
    default:
      throw new Error(`Unsupported duration type: ${duration}`);
  }

  const ratePerPeriod = rate / periodsPerYear;
  const interest = (principal * ratePerPeriod * time) / 100;

  return parseFloat(interest.toFixed(2));
}
