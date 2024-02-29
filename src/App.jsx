import { useEffect, useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App() {
  let storageItems = JSON.parse(window.localStorage.getItem("notes")) || []
  const [items, setItems] = useState(storageItems)
  const [input, setInput] = useState("")
  
  console.log(window.localStorage.getItem("notes"))
  console.log(items)

  function addToStorage(e) {
    if(input.length==0)return
    let newItem = { id: storageItems.length, text: input }
    storageItems.push(newItem)
    window.localStorage.setItem("notes", JSON.stringify(storageItems))
    setItems(storageItems)
  }
  function deleteItem(i){
    let newItems = storageItems.filter(e=>e.id != i)
    window.localStorage.setItem("notes", JSON.stringify(newItems))
    setItems(newItems)
  }
  useEffect(() => {

  }, [])
  return (
    <div className="app-con sm:py-4 md:py-16 flex justify-center">
      <div className="app bg-slate-200 shadow-2xl p-16  sm:mx-4  sm:rounded-3xl w-full flex flex-col items-center gap-5 max max-w-screen-sm">
      <h2 className='font-bold text-3xl text-center'>Nota!</h2>
      <div className='flex w-full justify-center rounded-md overflow-hidden'>
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='outline-none py-1 px-2 flex-1' />
        <button onClick={(e) => addToStorage(e)} className='bg-green-500 font-bold p-1 px-2'>Add</button>
      </div>
      <ul className='flex flex-col gap-3 w-full'>
        {
          items.map((e,i) => <ToDoItem deleteItem={deleteItem} key={`todoitem-${i}`} item={e} />)
        }
      </ul>
    </div>
    </div>
  )
}

export default App
