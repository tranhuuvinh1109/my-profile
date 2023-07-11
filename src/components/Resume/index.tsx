import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Circle } from '@mui/icons-material';


const Resume: FC = () => {
	return (
		<section id='resume' className='resume'>
			<Container>
				<div className='group-title'>
					<h2>Resume</h2>
					<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
				</div>

				<Row>
					<Col lg={6}>

						<h3 className='resume-title'>Education</h3>
						<div className='resume-item'>
							<h4>Danang University of Science And Technology</h4>
							<h5>2020 - Present</h5>
							<p><em>Information technology industry</em></p>
							<p>GPA: 3.2/4.0</p>
						</div>
						<h3 className='resume-title'>Sumary</h3>
						<div className='resume-item pb-0'>
							<h4>Brandon Johnson</h4>
							<p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
							<ul>
								<li><Circle className='list-icon' />Portland par 127,Orlando, FL</li>
								<li><Circle className='list-icon' />(123) 456-7891</li>
								<li><Circle className='list-icon' />alice.barkley@example.com</li>
							</ul>
						</div>

					</Col>
					<Col lg={6}>
						<h3 className='resume-title'>Professional Experience</h3>
						<div className='resume-item'>
							<h4>Internship Frontend</h4>
							<h5>May/2022 - Aug/2022</h5>
							<p><em>Sun Asterisk Company</em></p>
							<ul>
								<li><Circle className='list-icon' />Assuming the role of a Frontend Developer.</li>
								<li><Circle className='list-icon' />Meeting and discussing project requirements with the Project Manager.</li>
								<li><Circle className='list-icon' />Learn how to develop projects using the Scrum model.</li>
							</ul>
						</div>
						<div className='resume-item'>
							<h4>Internship Frontend</h4>
							<h5>Oct/2022 - Mar/2023</h5>
							<p><em>Ncc Asia Danang Company</em></p>
							<ul>
								<li><Circle className='list-icon' />Assuming the role of a Frontend Developer.</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Resume