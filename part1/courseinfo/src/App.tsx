import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"


function App() {

 const course = {
  name: 'Half Stack application development',
  parts:  [
    {name: 'Fundamentals of React', exercises: 10},    
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ],
totalExercises() {
  return this.parts.reduce((sum, part) => sum + part.exercises, 0);
}
}


return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total total = {course.totalExercises()}></Total>
    </div>
  )

}


export default App
