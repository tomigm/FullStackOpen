import { useState } from "react"


function App() {

 const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
 
const [selected, setSelected] = useState<number>(0)
const [points, setPoints] = useState<Array<number>>([...new Uint8Array(8)])

const handleNext = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}
const handleVote = () => {
  setPoints((prevPoints) => {
    const newPoints = [...prevPoints]; 
    newPoints[selected] += 1; 
    return newPoints;
  });
}
const mostVoted = () =>{
  const largest =  points.indexOf(Math.max(...points));
  const filteredNumbers = points.filter(num => num !== 0);
  if(largest === 0 && filteredNumbers.length === 0){
    return null
  }
  return (<><h3>ANECDOTE WITH MOST VOTES</h3> <blockquote><p><em>{anecdotes[largest]}</em></p></blockquote></>)
}
return (
  <div style={{padding: '20px'}}>
    <blockquote><p><em>{anecdotes[selected]}</em></p></blockquote>
    <div style={{display: 'flex', gap: '20px'}}>
      <button className="button" onClick={() => handleNext()}>NEXT</button>
      <button className="button button-outline" onClick={() => handleVote()} >VOTE</button>
    </div>

  {mostVoted()}
  </div>
)
}


export default App
