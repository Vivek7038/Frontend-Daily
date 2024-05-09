import "./styles.css";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
export default function Carousel() {
  const images = [
    {
      image_url:
        "https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554",
      caption: "Image 1",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020",
      caption: "Image 2",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6",
      caption: "Image 3",
    },
    {
      image_url:
        "https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d",
      caption: "Image 4",
    },
  ];

  return (
    <div className="App">
      <SlideShow images={images} />
    </div>
  );
}

const SlideShow = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slideshow">
      {images.map((e, i) => (
        <Slide {...e} key={e.caption} active={i === active} i={i}/>
      ))}
      <div className="bulleted-navigation">
        {images.map((e, i) => (
          <div
            className={`dot ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <div className="next-prev-navigation">
        <div className="navigation next" onClick={onNext}>
          <FaChevronRight />
        </div>
        <div className="navigation prev" onClick={onPrev}>
          <FaChevronLeft />
        </div>
      </div>
    </div>
  );
};

const Slide = ({ image_url, caption, active ,i}) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={image_url} alt={caption} className=""/>
      <span className="">{caption}</span>
      <p>{`${i+1}/4`}</p>
    </div>
  );
};
