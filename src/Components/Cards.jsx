import React from 'react'
import Card from './Card'
function Cards({users,handleRemove, index}) {
  return (
     <div className='h-[80vh] w-full flex justify-center overflow-y-auto items-center gap-5 flex-wrap'>
      <Card handleRemove={handleRemove} index={index} users={users}/>
      </div>
  )
}

export default Cards
