import React, { useState } from "react";


// APPDATA
const data=[
  {song:"Tum Mile", singer:"Pritam & Javed Ali", favourite:false , image:"https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"},
  {song:"Pehli Dafa", singer:"Atif Aslam", favourite:false , image:"https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {song:"Tu hi hai", singer:"Amit Trivedi & Arijit Singh", favourite:false , image:"https://images.unsplash.com/photo-1541336318489-083c7d277b8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmR8ZW58MHx8MHx8fDA%3D"},
  {song:"Offo", singer:"Aditi Singh Sharma", favourite:false , image:"https://images.unsplash.com/photo-1534146789009-76ed5060ec70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2V8ZW58MHx8MHx8fDA%3D"},
  {song:"Voh Dekhney Mein", singer:"Ali Zafar", favourite:false , image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW58ZW58MHx8MHx8fDA%3D"},
]
const [songData, setSongData]=useState(data)
const handleclick = (index)=>{
setSongData((prev)=>{
  return prev.map((item, itemIndex)=>{
    if(itemIndex===index) return{...item, favourite:!item.favourite}
    return item;
  })

})
}
// APPDATA
function MusicCard({values,handleclick, index}) 
{
  // values jab app se mangaeing bahut dhayaan rakhna padega ki array mein se hai ya bahar se hai
  var {song, image, favourite, singer}=values
 
  return (
    <>
      <div className="m-10 flex justify-center gap-5 p-10 bg-white h-48 w-[100%] md:w-[25%] rounded-lg relative">
        <div
          id="img"
          className="h-[80%] bg-slate-400 rounded-lg overflow-hidden"
        >
          <img
            className="h-[100%] object-cover"
            src={image}
            alt="image"
          />
        </div>
        <div id="text">
          <div id="songname" className="font-semibold text-xl md:text-nowrap">{song}</div>
          <div id="artist" className="text-sm">{singer}</div>
        </div>
        <button onClick={()=>handleclick(index)} className={`${favourite===false?"bg-orange-400":"bg-sky-400"} bottom-0 translate-y-[50%] py-1 px-3 rounded-full text-white font-semibold text-[1.15rem] absolute`}>{favourite===false?"Add to favorites":"Added"}</button>
      </div>
    </>
  );
}

export default MusicCard;
