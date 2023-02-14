import React from "react";
import  {useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'



const Content = () => {
  
  // const [name, setName] = useState('dave');
  // const [count, setCount] = useState(0);

  const [items, setItems] = useState([{
    id: 1,
    item: 'one',
    checked: false
  },
  {
    id: 2,
    item: 'two',
    checked: true
  },
  {
    id: 3,
    item: 'three',
    checked: false
  }
])

const handleCheck = (id) => {
  console.log(`key: ${id}`)
  const listItems = items.map((item) => item.id == id ? {...item, checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}

const handleDelete = (id) => {
 const listItems = items.filter((item) => item.id !== id);
 setItems(listItems);
 localStorage.setItem('shoppinglist', JSON.stringify(listitems));
}
  // const handleNameChange = () => {
  //   const names = ['bob', 'kevin', 'dave']
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  //   // return names[int]
  // }

  // const handleClick = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  //   console.log(count)
  // }

  // const handleClick4 = () => {
  //   console.log(count)
  // }

  // const handleClick2 = (name) => {
  //   console.log(`${name} was clicked`)
  // }


  // const handleClick3 = (e) => {
  //   console.log(e.target)
  // }

  return (
  <main> 
     {/* <p onDoubleClick ={handleClick}>
    Hello {name}
  </p>
  <button onClick ={handleNameChange}> Change name  </button>
  <button onClick = { handleClick }> Click count   </button>
  <button onClick = { handleClick4 }> Click count   </button>
  <button onClick = { () => { handleClick2('dave')} }> Click it  </button>
  <button onClick = { (e) => { handleClick3(e)} }> Click it  </button>
   */}
   {items.length ? (

<ul>
  { items.map((item) => (
    <li className="item" key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>
      <label 
      style ={(item.checked) ? {textDecoration: 'line-through'} : null}
      onDoubleClick= {() => handleCheck(item.id)}> {item.item}</label>
      <button>Delete</button>
      <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0"/>
       </li>
  ))}
</ul>
) : (
  <p style={{marginTop: '2rem'}}>No Items</p>
)
}
  </main>
  )
}

export default Content
