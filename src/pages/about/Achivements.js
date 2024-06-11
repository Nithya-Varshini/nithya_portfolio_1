import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Achivements.css";

export default function Achivements() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="mb-5">
        <VerticalTimeline lineColor={"#cb2d6f"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(203, 45, 111)', color: '#fff' }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            date="MAR 2024"
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong>Winner</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Secured ”Build for Bharath” category winner at{" "}
              <strong>DevHouse 2024</strong>
              conducted by VIT, Chennai amidst <strong>60</strong> teams,
              emerging as one of the Finalists from a pool of{" "}
              <strong>1400</strong> teams.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="MAR 2024"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> Top 25</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              At <strong>Great Chennai Police Hackathon 2024</strong> conducted
              by Great Chennai Police Department
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="FEB 2024"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> Winner</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              At <strong>Hack-AI-Thon 2024</strong>, surpassing{" "}
              <strong>60</strong> finalist teams, organized by St. Joseph’s
              College of Engi neering amongst <strong>220</strong> submissions.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="FEB 2020"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> 1st Runner up</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              at the <strong>Kochi Hackathon ’24</strong>, among{" "}
              <strong>16</strong> finalist teams (<strong>356</strong> idea
              submissions), hosted by Netsrtatum Technologies Pvt. Ltd.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="DEC 2023"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> Finalist</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Finalist and <strong>Top 3</strong> amongst <strong>141</strong>{" "}
              shortlisted teams in <strong>Smart India Hackathon 2023</strong>{" "}
              to build SoC Application for Ministry of Power.
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUG 2023"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> Finalist</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Finalist in the Guru Nanak College of Engineering, Hyderabad’s
              hackathon competition, <strong>Hactopia 2023</strong>
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="MAR 2023"
            contentStyle={{
              borderTop: "3px solid  rgb(203, 45, 111)",
              background: "transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(203, 45, 111)" }}
            iconStyle={{ background: "rgb(203, 45, 111)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              <strong> Top 60</strong>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Selected for the second round in{" "}
              <strong>TN Police Hackathon 2023</strong> among{" "}
              <strong>627 teams</strong> all over Tamil Nadu.
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}
