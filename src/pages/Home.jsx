import React from 'react'
import { useNavigate } from 'react-router-dom';
import timeline from "../assets/timeline.png"
import accordion from "../assets/accordion.png"
const data=[
  {
    id:1,
    img:timeline,
    desc:"The Timeline component visually represents events or milestones chronologically, providing a structured and intuitive way to showcase temporal information in a linear fashion. It typically consists of date markers and associated content, offering a cohesive overview of a progression of events.",
    tags:[
      "timeline",
      "our story"
    ],
    name:"timeline"
  },
  {
    id:2,
    img:accordion,
    desc:"The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling. Accordions contains labels with the relevant information. Users can click on the accordion to read additional information.",
    tags:[
      "accordion",
     
    ],
    name:"accordion"
  }
]
const Home = () => {
  const navigate=useNavigate();
 const handleClick=(name) => {
    navigate(`/${name}`)
 }
  return (
   <>
  <div className=" flex flex-row flex-wrap gap-9 pl-9">
  {data.map((item)=>(
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" key={item.id} onClick={()=>handleClick(item.name)}>
    <img className="w-full h-1/3" src={item.img} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{item.title} </div>
      <p className="text-gray-700 text-base">
    {item.desc}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {item.tags.map((tag,index)=>(
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>{tag}</span>
     
      ))}
    
    </div>
  </div>
  ))}
  </div>
   </>
  )
}

export default Home