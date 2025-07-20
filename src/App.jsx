import { useState, useEffect } from 'react'
import './App.css'

const Card = ({title}) =>{
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false)
  useEffect(() => {
  console.log(`${title} has been ${hasLiked ? 'Liked' : 'Unliked'}`);
    }, [hasLiked])

    return (
      <>
      <div className='card' onClick={() => setCount((prevState)=> prevState+1)}>
      <h2 className="text-3xl font-bold underline">{title}</h2>
      <h2>{count} views</h2>

      <button onClick={()=>setHasLiked(!hasLiked)}>{hasLiked ? 'Liked' : 'Like'}</button>
      </div>
      </>
    ) 
}

const App = () =>{
  return (
  <>
    <div className="card-container">
    <Card title="Heads of State"/>

    <Card title="G20"/>

    <Card title="The Enemy Within"/>
    </div>

    </>
  )
}

export default App
