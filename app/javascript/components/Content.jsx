import React from "react";
import  {useState } from 'react';



const Content = () => {
  
  const [name, setName] = useState('dave');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['bob', 'kevin', 'dave']
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
    // return names[int]
  }

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }

  const handleClick4 = () => {
    console.log(count)
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }


  const handleClick3 = (e) => {
    console.log(e.target)
  }

  return (
  <main> <p onDoubleClick ={handleClick}>
    Hello {name}
  </p>
  <button onClick ={handleNameChange}> Change name  </button>
  <button onClick = { handleClick }> Click count   </button>
  <button onClick = { handleClick4 }> Click count   </button>
  <button onClick = { () => { handleClick2('dave')} }> Click it  </button>
  <button onClick = { (e) => { handleClick3(e)} }> Click it  </button>
  </main>
  )
}

export default Content
