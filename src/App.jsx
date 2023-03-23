import { useState } from "react"

const App = () => {
  const [name, setName] = useState({firstname: "", lastname: ""})

  const handleClick = () => window.alert(` Helloo ${name.firstname} ${name.lastname}!`)
  const handleInputs = (event) =>{
    setName(prevName=>{
      return {
        ...prevName,
        [event.target.name] : event.target.value
      }
    })
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
      <div className="flex flex-col mt-10 gap-y-5">
        <input type="text" onChange={handleInputs} name="firstname" className="border-2 rounded px-3 w-72" placeholder="firstname"/>
        <input type="text" onChange={handleInputs} name="lastname" className="border-2 rounded px-3 w-72" placeholder="lastname"/>
        <button onClick={handleClick} className="btn ">Greet Me</button>
      </div>
    </div>
  )
}

export default App
