import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { myProfile } from '../../const'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'

const About: FC = () => {
	return (
		<section id="about" className="about">
			<Container>
				<div className="section-title">
					<h2>About</h2>
					<p>{myProfile.title}</p>
				</div>
				<Row>
					<Col lg={4}>
						<Image src={avatar} className="img-fluid" alt="avatar" />
					</Col>
					<Col lg={8}>
						<h3>{myProfile.work}</h3>
						<Row>
							<Col lg={6}>
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{myProfile.birthday}</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{myProfile.phone}</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{myProfile.address}</span></li>
								</ul>
							</Col>
							<Col lg={6}>
								<ul>
									<li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{myProfile.age}</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{myProfile.email}</span></li>
									<li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
								</ul>
							</Col>
						</Row>
						<p>
							{
								myProfile.slogan
							}
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default About