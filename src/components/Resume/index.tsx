import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Circle } from "@mui/icons-material";
import { myExperience } from "../../const";

const Resume: FC = () => {
  return (
    <section id="resume" className="resume" data-aos="fade-left">
      <Container>
        <div className="group-title">
          <h2>Resume</h2>
          <p>
            A resume is a document that summarizes a person&apos;s education,
            work experience, skills, and achievements, typically used when
            applying for a job.
          </p>
        </div>

        <Row>
          <Col lg={6}>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Danang University of Science And Technology</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>Information technology industry</em>
              </p>
              <p>GPA: 3.2/4.0</p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="resume-title">Professional Experience</h3>
            {myExperience.map((item, index) => {
              return (
                <div key={index} className="resume-item">
                  <h4>{item.title}</h4>
                  <h5>{item.time}</h5>
                  <p>
                    <em>{item.company}</em>
                  </p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>
                        <Circle className="list-icon" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
