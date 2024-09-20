import {IFeedback, IStatistics} from '../../../types.ts'
import StatisticsLine from './StatisticsLine.tsx'

  
  interface Props {
    feedback: IFeedback,
    statistics: IStatistics
  }
  
  const Statistics: React.FC<Props> = ({feedback, statistics}) => {
    
    if(statistics.feedbackTotal() === 0) {
      return(<h3>NO FEEDBACK YET</h3>)
    }
    return (
      <>
      {}
      <table>
        <tbody>
      <StatisticsLine text='Good' value={feedback.good} />
      <StatisticsLine text='Neutral' value={feedback.neutral} />
      <StatisticsLine text='Bad' value={feedback.bad} />
      <StatisticsLine text='Total' value={statistics.feedbackTotal()} />
      <StatisticsLine text='Average' value={statistics.feedbackAverage()} />
      <StatisticsLine text='Positive' value={statistics.feedbackPositive()} />
      </tbody>
      </table>

      </>
    )
  };
    export default Statistics