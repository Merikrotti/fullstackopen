import { useState, useEffect } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState({
    anecdotes: [
    { text: 'If it hurts, do it more often.', points: 0 },
    { text: 'Adding manpower to a late software project makes it later!', points: 0 },
    { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',points: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',points: 0 },
    { text: 'Premature optimization is the root of all evil.',points: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',points: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',points: 0 },
    { text: 'The only way to go fast, is to go well.', points: 0 }
    ]
  })
   
  const [selected, setSelected] = useState(0);
  const [currentPoints, setPoints] = useState(0);
  
  
  const incPoints = () => {
    let temp = anecdotes;

    temp.anecdotes[selected].points += 1;
    setPoints(currentPoints+1);

    setAnecdotes(temp);
  }

  useEffect(() => {
    setPoints(anecdotes.anecdotes[selected].points);
  });

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes.anecdotes[selected].text}</p>
      <p>Current votes: {currentPoints}</p>
      <input type="button" value="next anecdote" onClick={() => setSelected(selected + 1 >= anecdotes.anecdotes.length ? 0 : selected + 1)}/>
      <input type="button" value="vote" onClick={incPoints}/>
    </div>
  );
}

export default App