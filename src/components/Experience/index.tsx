import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "@mui/icons-material";
import Image from "next/image";
import { ProjectList } from "../../const";

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
        <Row className="portfolio-container">
          {ProjectList.sort(
            (a, b) =>
              new Date(b.dateTime!).getTime() - new Date(a.dateTime!).getTime()
          ).map((project, index) => {
            return (
              <Col
                lg={4}
                md={6}
                className="portfolio-item filter-app mb-10 flex items-center"
                key={index}
              >
                <div className="portfolio-wrap flex justify-center py-5 items-center">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-[60%]"
                  />
                  <div className="portfolio-info">
                    <h4>{project.name}</h4>
                    {project.description && <p>{project.description}</p>}
                    <p>Website</p>
                    <div className="portfolio-links">
                      <a href={project.link} target="_blank">
                        <Link />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
