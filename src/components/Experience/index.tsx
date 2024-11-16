import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { ProjectList } from "../../const";
import Project from "../Project";

const Portfolio: FC = () => {
  return (
    <section
      id="experience"
      className="portfolio overflow-hidden section-bg pt-10"
      // data-aos="fade-left"
    >
      <Container>
        <div className="group-title">
          <h2>Experience</h2>
          <p>
            I have been involved in various projects, ranging from personal
            endeavors to collaborative team projects, allowing me to broaden my
            skills and thrive in diverse work environments.
          </p>
        </div>
        <Project data={ProjectList} />
      </Container>
    </section>
  );
};

export default Portfolio;
