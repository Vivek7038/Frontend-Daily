import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { TbFreeRights } from "react-icons/tb";
const events = [
  {
    heading: "2015",
    subHeading: "Company is founded ",
    direction: "right",
    icon: <FaStar />,
  },
  {
    heading: "2016",
    subHeading: "First Product Release",
    direction: "left",
    icon: <FaBell />,
  },
  {
    heading: "2018",
    subHeading: "Series A funding ",
    direction: "left",
    icon: <TbFreeRights />,
  },
  {
    heading: "2018",
    subHeading: "Free Plan released",
    direction: "right",
    icon: <TbReportMoney />,
  },
  {
    heading: "2019",
    subHeading: "Freemium experience Released",
    direction: "right",
    icon: <TbReportMoney />,
  },
  {
    heading: "2020",
    subHeading: "Unlimited data plans released",
    direction: "left",
    icon: <TbReportMoney />,
  },
  {
    heading: "JANUARY 2021",
    subHeading: "First 5k paid users",
    direction: "right",
    icon: <TbReportMoney />,
  },
];
const TimeLine = () => {
  return (
    <>
      <div className="">
        <div>TimeLine Component</div>
        <div className="flex flex-col gap-y-3 w-full my-4 ]">
          {events.map((event, key) => (
            <React.Fragment key={key}>
              <Circle icon={event.icon} />
              <div className="grid grid-cols-3 grid-rows-1 gap-x-2 items-center mx-auto ">
                {event.direction == "left" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                  />
                ) : (
                  <div></div>
                )}
                <Pillar />
                {event.direction == "right" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              {key < event.length - 1 && <Circle />}
            </React.Fragment>
          ))}
          <Circle />
        </div>
      </div>
    </>
  );
};

const Circle = ({ icon }) => {
  return (
    <div className="relative w-7 h-7 mx-auto">
      <div className="rounded-full w-full h-full bg-blue-500"></div>
      {icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      )}
    </div>
  );
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto "></div>
  );
};
const EventCard = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl pt-4 pb-4  pl-2 pr-2">
      <div className="text-yellow-700 font-bold text-lg border-b ">
        {heading}
      </div>
      <div className="text-sm text-green-900 font-bold">{subHeading}</div>
    </div>
  );
};
export default TimeLine;
