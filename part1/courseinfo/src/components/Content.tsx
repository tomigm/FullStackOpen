interface Part {
  name: string,
  exercises: number
}

interface Props {
  parts: Part[]
}

const Content: React.FC<Props> = ({ parts }) => {
  return (
    <>
    
    {parts.map(part => (
      <p>
        {part.name} | {part.exercises}
      </p>  
    ))}
  
    </>
  )
};
  export default Content
  