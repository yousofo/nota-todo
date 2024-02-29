import React from 'react'

const ToDoItem = ({ item, deleteItem }) => {
  return (
    <li className=' flex justify-between rounded-md overflow-hidden max-w-full'>
      <p className='py-1 bg-white px-2 break-words w-[calc(100%-62px)] rounded-b-md'>{item.text}</p>
      <button onClick={_=>deleteItem(item.id)}  className='bg-red-500 py-1 h-fit text-center w-[62px] rounded-r-md'>Delete</button>
    </li>
  )
}

export default ToDoItem