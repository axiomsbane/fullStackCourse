const Hello = (props) => {
  return (
    <div>
      <p>
      Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}


const App = () => {
  const name = "Obito"
  const age = 89
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Gojo" age={10+69}/>
      <Hello name="Matsumi" age={age}/>
      <Hello name={name} age={age-10} />
    </div>
  )
}


export default App
