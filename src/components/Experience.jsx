import React from "react";
import Card from "./Card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "./Icon";
export default function Experience() {
  return (
    <div className="md:flex  bg-[#EDE4FF] justify-between md:p-16 p-5 font-poppins md:my-20 my-4">
      <div className="md:w-1/3">
        <p className="font-semibold text-xl ">MY EXPERIENCE 👨‍💻</p>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{ background: "", color: "#009ACC" }}
            contentArrowStyle={{ borderRight: "7px solid white  " }}
            date="Dec'23 - Jan'24"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon name="Flutrr" />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Management Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Flutrr</h4>
            <p>
              Market study , Market Research , UI/UX , Competitior analysis , Product Improvement
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work  "
            contentStyle={{ background: "", color: "#009ACC" }}
            contentArrowStyle={{ borderRight: "7px solid white  " }}
            date="Jan'24 -Mar'24"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon name="Samson"/>}
          >
            <h3 className="vertical-timeline-element-title">
              SEO Consultant 
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Samson Consulting</h4>
            <p>
              SEO improvement, Technical SEO , Open Graph , Keyword Research
            </p>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    </div>
  );
}
