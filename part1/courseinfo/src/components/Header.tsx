// Define the props interface
interface Props {
    course: string;
  }
  
  // Functional component with typed props
  const Header: React.FC<Props> = ({ course }) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };
  
  export default Header;