import {FeedbackType} from '../../types.ts'

  
  interface Props {
    handleFeedback: (value: FeedbackType) => void
  }
  
  const ReviewButtons: React.FC<Props> = ({ handleFeedback }) => {
    return (
      <>
      <div role="group">
      <button onClick={() => handleFeedback('good')}>good</button>
      <button onClick={() => handleFeedback('neutral')}>neutral</button>
      <button onClick={() => handleFeedback('bad')}>bad</button>
      </div>
      </>
    )
  };
    export default ReviewButtons
    