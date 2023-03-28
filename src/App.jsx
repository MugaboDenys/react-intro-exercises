import './App.css'
import Item from './components/Item';

const App = () => {

  const genLinks = () =>{
    let arr = []
    for(let i = 0; i< 10; i++){
      arr.push({text : `Exercise ${i}`, link: `/exercise${i}`})
    }
    return arr;
  }

  const array = genLinks()
  const array1 = ['🐶 dog', '😾 cat', '🐤 chicken', '🐮 cow', '🐑 sheep', '🐴 horse']
  return (
    <div className="h-screen flex flex-col items-center ">
      <div>
        {array.map((item, index)=>(
          <a key={index} href={item.link} className={`px-2 underline underline-offset-4 ${!index == 0 && "border-indigo-600 border-l"} text-indigo-600 `} >{index == 0 ? "Home" : item.text}</a>
        ))}
      </div>
      <ul className='mt-32 rounded-md w-52 border-2 justify-center flex flex-col items-start'>
          {array1.map(item=>(
            <Item key={item}>{item}</Item>
          ))}
      </ul>
    </div>
  )
}

export default App
