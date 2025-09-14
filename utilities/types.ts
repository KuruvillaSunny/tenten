

export interface InterestParams {
  principal: number;
  rate: InterestRate; // Annual interest rate in percentage
  duration: Duration; // 'Daily' | 'Monthly' | 'Yearly'
  time?: number; // Optional: defaults to 1
}

export type Duration = "Daily" | "Monthly" | "Yearly";
export type InterestRate =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;