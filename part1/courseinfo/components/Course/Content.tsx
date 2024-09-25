import { ICoursePart } from "../../types/types"


interface Props {
  parts: ICoursePart[]
}

const Content: React.FC<Props> = ({ parts }) => {
  return (
    <>
    
    {parts.map(part => (
      <p key={part.id}>
        {part.name} | {part.exercises}
      </p>  
    ))}
  
    </>
  )
};
  export default Content
  