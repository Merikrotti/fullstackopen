const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    { part: 'Fundamentals of React', exercise: 10},
    { part: 'Using props to pass data', exercise: 7},
    { part: 'State of a component', exercise: 14}
    ]
  }


  return (
    <div>
      <Header course={course.name}/>
      <Content content={course.parts}/>
      <Total exercises={course.parts}/>
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