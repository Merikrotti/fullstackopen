const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    { part: part1, exercise: exercises1},
    { part: part2, exercise: exercises2},
    { part: part3, exercise: exercises3},
  ]


  return (
    <div>
      <Header course={course}/>
      <Content content={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {
  return props.content.map((c, i) => {
      return <p key={i+c}>{c.part} {c.exercise}</p>
    });
}

const Total = (props) => {
  let total = 0;

  props.exercises.forEach((c) => {
    total += c.exercise;
  });

  return <p>Number of exercises {total}</p>;
}

export default App