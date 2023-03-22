import './App.css'

function App() {

  const handleClick = () =>{
    window.alert("Clicked!")
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={handleClick} className="py-2 px-4 border-2 border-black rounded">Click Me</button>
    </div>
  )
}

export default App
