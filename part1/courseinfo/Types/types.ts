export type FeedbackType = keyof IFeedback;
export interface IFeedback {
  good: number,
  bad: number,
  neutral: number
}

export interface ICoursePart {
  name: string,
  exercises: number,
  id: number
} 

export interface ICourse {
    id: number,
    name: string,
    parts: ICoursePart[],
    totalExercises(): number
  }


 