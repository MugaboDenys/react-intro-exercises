import './App.css'

function App() {

  const handleClick = () =>{
    window.alert("Clicked!")
  }

  const genLinks = () =>{
    let arr = []
    for(let i = 0; i< 10; i++){
      arr.push({text : `Exercise ${i}`, link: `/exercise${i}`})
    }
    return arr;
  }

  const array = genLinks()
  return (
    <div className="h-screen flex flex-col items-center ">
      <div>
        {array.map((item, index)=>(
          <a key={index} href={item.link} className={`px-2 underline underline-offset-4 ${!index == 0 && "border-indigo-600 border-l"} text-indigo-600 `} >{index == 0 ? "Home" : item.text}</a>
        ))}
      </div>
      <button onClick={handleClick} className="py-2 px-4 border-2 mt-64 border-black rounded">Click Me</button>
    </div>
  )
}

export default App
