import { useState } from "react"
import { useEffect } from "react"
import Card from "./components/Card"

const App = () => {
  const [count, setCount] = useState(0)
  const [usersData, setUsersData] = useState([])

  useEffect(()=>{
    async function getData(){
      try {
        const res = await fetch("https://random-data-api.com/api/users/random_user?size=10")
        const data = await res.json()
        let array = []
        data.forEach(user=> array.push({image: user.avatar, fname : user.first_name, lname : user.last_name, employment:user.employment}))
        setUsersData(array)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  },[count])

  const handleClick = () => setCount(prevCount=> prevCount+1)

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
      <div>
        <button className="btn mt-20" onClick={handleClick}>Fetch Random</button>
      </div>
      <div className="w-[60rem] p-5 mt-20 bg-[#dff8db] grid grid-cols-2 justify-items-center gap-5 items-center rounded-md">
        {usersData.map(item=>(
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
