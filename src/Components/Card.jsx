import React from "react";

function Card({users, handleRemove, index}) {
  const{name, designation,email,image}=users
  return (
  <>
    {users.map((item,index)=>{
       return <div className="bg-green-700 my-[10vh] p-1 w-fit h-fit flex flex-col rounded-xl relative items-center ">     
        <div id="image" className="rounded-[50%] bg-black overflow-hidden ring-8 ring-white w-[8rem] h-[8rem] absolute -translate-y-[50%]">
                <img className="h-full w-full  object-cover" src={item.image} alt="" />
        </div>
      <div id="text" className="flex flex-col px-5 justify-center items-center gap-4 text-white">
        <div id="box" className="w-full h-[8.5vh] md:h-[4vh] lg:h-[4vw]"></div>
        <div id="text1" className="text-3xl font-extrabold tracking-widest capitalize">{item.name}</div>
        <div id="text2" className="font-semibold text-xl lowercase">{item.email}</div>
        <div id="text3" className="text-xl capitalize">{item.designation}</div>
      </div>
      <div id="icons" className=" text-black my-3 mx-4">
        <i class="ri-github-fill bg-white rounded-[50%] m-2 p-1 text-2xl"></i>
        <i class="ri-linkedin-box-fill bg-white rounded-[50%] m-2 p-1 text-2xl"></i>
        <i class="ri-twitter-x-fill bg-white rounded-[50%] m-2 p-1 text-2xl"></i>
        <i class="ri-youtube-fill bg-white rounded-[50%] m-2 p-1 text-2xl"></i>
      </div>
      <div id="footer" className="rounded-b-xl py-2 w-full justify-center mt-4 items-center flex text-green-700 text-xl font-semibold">
        <div id="footerText"><button onClick={()=>handleRemove(index)} className=" bg-red-600 p-2 rounded-full mb-2 text-white">Remove</button></div>
      </div>
    </div>
    })}
  </>
  );
}

export default Card;
