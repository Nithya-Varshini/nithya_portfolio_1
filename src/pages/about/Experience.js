import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Achivements.css";

export default function Experience() {
  return (
    <>
      <br></br>
      <br></br>
      <VerticalTimeline lineColor={"#cb2d6f"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(203, 45, 111)', color: '#fff' }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
          contentStyle={{
            borderTop: "3px solid  rgb(203, 45, 111)",
            background: "transparent",
          }}
          date="June 2024- Present"
          iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Flutter Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            nStore Retech Private Limited
          </h4>
          <p>
            Secured this internship role by achieving the 1st runner-up position
            in the Kochi Hackathon 2023. Currently,working on the company
            dashboard, which displays data about all transactions and activities
            done in the platform
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Feb 2024- Apr 2024"
          contentStyle={{
            borderTop: "3px solid  rgb(203, 45, 111)",
            background: "transparent",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
          iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hebesec Technologies Private Limited
          </h4>
          <p>
            Led the project to completely redesign and rebuild the company’s
            official website, transitioning from a WordPress platform to a
            modern React-based framework.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="  May 2023- May 2023"
          contentStyle={{
            borderTop: "3px solid  rgb(203, 45, 111)",
            background: "transparent",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
          iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
          //    icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Agile Cyber Solutions Private Limited
          </h4>
          <p>
            Collaborated on a real-time project with a team of developers,
            enhancing API integration and working on complex backend processes.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
