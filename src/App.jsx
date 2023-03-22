import { useRef } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const buttonRef = useRef(null)

  const handleClick = () =>{
    window.alert(`You clicked ${buttonRef.current.textContent}`)
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
      <div className='flex gap-10'>
        <Button >
          Button 1
        </Button>
        <Button >
          Button 2
        </Button>
        <Button >
          Button 3
        </Button>
      </div>
    </div>
  )
}

export default App
