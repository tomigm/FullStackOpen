import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
import {ICourse} from "../../types/types"

// Define the props interface
interface Props {
    course: ICourse;
  }
  
  // Functional component with typed props
  const Course: React.FC<Props> = ({ course }) => {
    return (
      <>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total total = {course.totalExercises()}></Total>
      </>
    );
  };
  
  export default Course;