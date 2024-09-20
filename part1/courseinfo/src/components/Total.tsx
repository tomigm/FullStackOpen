
  
  interface Props {
    total: number
  }
  
  const Content: React.FC<Props> = ({ total }) => {
    return (
      <>
      
      <p>Number of exercises {total}</p>
    
      </>
    )
  };
    export default Content
    