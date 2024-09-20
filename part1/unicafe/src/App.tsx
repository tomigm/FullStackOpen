import { useState } from 'react'
import ReviewButtons from './components/ReviewButtons'
import {IFeedback, FeedbackType, IStatistics} from '../types.ts'
import Statistics from './components/Statistics table/Statistics.tsx';

const App = () => {
  // save clicks of each button to its own state
const [feedback, setFeedback] = useState<IFeedback>({good: 0, neutral: 0, bad: 0});
console.log(feedback, 'init');

  const handleFeedback = (type: FeedbackType) => {
    setFeedback({...feedback, [type]: ++feedback[type] })   
  }
const statistics: IStatistics = {
  feedbackTotal(){ 
    return Object.values(feedback).reduce((sum, value) => sum + value)
  },
  feedbackPositive(){
    const total = this.feedbackTotal();
    return total ?  feedback.good / total * 100 : 0
  },
  feedbackAverage(){
    const total = this.feedbackTotal();
    return total ? total / feedback.good - feedback.bad : 0
  }
}

return (
    <div>
      <ReviewButtons handleFeedback={handleFeedback} ></ReviewButtons>
      <Statistics feedback={feedback} statistics={statistics}/>
      
    </div>
  )
}

export default App