import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <input value="good" type="button" onClick={() => setGood(good+1)} />
      <input value="neutral" type='button' onClick={() => setNeutral(neutral+1)}/>
      <input value="bad" type='button' onClick={() => setBad(bad+1)}/>

      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

const Statistics = (props) => {

  let total = props.good + props.neutral + props.bad;

  return ( <div>
  <h1>Statistics</h1>
  <table>
    <tbody>
    <StatisticsLine text="good" value={props.good}/>
    <StatisticsLine text="neutral" value={props.neutral}/>
    <StatisticsLine text="bad" value={props.bad}/>
    <StatisticsLine text="all" value={total}/>
    <StatisticsLine text="average" value={((props.good * 1.0 + props.bad * -1.0) / (total == 0 ? 1 : total)).toFixed(1)}/>
    <StatisticsLine text="positive" suffix="%" value={(props.good / (total == 0 ? 1 : total) * 100).toFixed(1)}/>
    </tbody>
  </table>
  </div>
  );
}

const StatisticsLine = (props) => {
  return (<tr><td>{props.text}</td><td>{props.value}{props?.suffix}</td></tr>);
}

export default App