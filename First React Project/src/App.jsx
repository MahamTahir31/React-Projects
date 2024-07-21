import Box from "./box"

function App() {
  
  const username = prompt("Enter Username: ")
  return (
    <>
    <h1>Hi {username }</h1>
    <Box/>
    <p>Para</p>

    </>
  )
}

export default App
