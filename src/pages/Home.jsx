import React from "react";
import { useNavigate } from "react-router-dom";
import timeline from "../assets/timeline.png";
import accordion from "../assets/accordion.png";
import carousel from "../assets/carousel.jpg";
import multiselect from "../assets/multi-select-search.png";
const data = [
  {
    id: 1,
    img: timeline,
    desc: "The Timeline component visually represents events or milestones chronologically, providing a structured and intuitive way to showcase temporal information in a linear fashion. It typically consists of date markers and associated content, offering a cohesive overview of a progression of events.",
    tags: ["timeline", "our story"],
    name: "timeline",
  },
  {
    id: 2,
    img: accordion,
    desc: "The accordion component is used to generate vertically stacked content in a page. It is intended to save vertical space by hiding content, reducing scrolling. Accordions contains labels with the relevant information. Users can click on the accordion to read additional information.",
    tags: ["accordion"],
    name: "accordion",
  },
  {
    id: 3,
    img: carousel,
    desc: "A carousel component is a front-end component that displays a list of images or other content as a scrollable catalog. ",
    tags: ["Carousel", "Slideshow"],
    name: "carousel",
  },
  {
    id: 4,
    img: multiselect,
    desc: "A multi-select search component is a web component that lets users select multiple items from a list, and also lets them search for options.",
    tags: ["multiselect", "Search"],
    name: "multi-select-search",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    navigate(`/${name}`);
  };
  return (
    <>
      <div className="h-full">
        <div className=" flex flex-row flex-wrap gap-9 pl-9 pr-9 h-full ">
          {data.map((item) => (
            <div
              className="max-w-sm  border rounded-lg shadow-lg cursor-pointer"
              key={item.id}
              onClick={() => handleClick(item.name)}
            >
              <img
                className="w-full h-48 object-cover"
                src={item.img}
                alt="img"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title} </div>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {item.tags.map((tag, index) => (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
