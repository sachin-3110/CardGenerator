import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleSubmitFunction}) {
  const{register,handleSubmit,reset}=useForm();
  const handleSubmitButton=(data)=>{
    handleSubmitFunction(data);
    reset();
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit(data=>handleSubmitButton(data))} className='w-full h-40vh md:h-auto flex  flex-col md:flex-row justify-center gap-2 items-center'>
      <input required {...register("name")} type="text" placeholder='name' className='mx-2 text-center font-semibold outline-none  p-2 placeholder-green-600 rounded-xl bg-sky-200' />  
      <input required {...register("designation")} type="text" placeholder='designation/s' className='mx-2 text-center font-semibold outline-none  p-2 placeholder-green-600 rounded-xl bg-sky-200' />  
      <input required {...register("email")} type="email" placeholder='email' className='mx-2 text-center font-semibold outline-none  p-2 placeholder-green-600 rounded-xl bg-sky-200' />  
      <input required {...register("image")} type="text" placeholder='Image Url' className='mx-2 text-center font-semibold outline-none  p-2 placeholder-green-600 rounded-xl bg-sky-200'/>
      <input type="submit" className='bg-green-700 text-white p-2 rounded-full text-xl hover:cursor-pointer' />  
      </form>         
    </div>
  )
}

export default Form
