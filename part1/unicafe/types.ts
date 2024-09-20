export type FeedbackType = keyof IFeedback;
export interface IFeedback {
  good: number,
  bad: number,
  neutral: number
}

export interface IStatistics {
    feedbackTotal(): number;
    feedbackPositive(): number;
    feedbackAverage(): number;
  }