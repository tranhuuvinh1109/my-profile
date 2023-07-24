import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { myProfile } from '../../const'
import Image from 'next/image'
import avatar from '../../../public/avatar.jpg'
import { KeyboardArrowRight } from '@mui/icons-material'

const About: FC = () => {
	return (
		<section id='about' className='about' data-aos='fade-right'>
			<Container>
				<div className='group-title'>
					<h2>About</h2>
					<p>{myProfile.title}</p>
				</div>
				<Row>
					<Col lg={4} className='flex justify-center items-center'>
						<Image src={avatar} className='img-fluid' alt='avatar' />
					</Col>
					<Col lg={8} className='flex flex-col justify-between'>
						<div>
							<h3 className='about-work'>{myProfile.work}</h3>
							<Row>
								<Col lg={6}>
									<ul>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Birthday:</strong> <span>{myProfile.birthday}</span></li>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Website:</strong> <span>www.example.com</span></li>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Phone:</strong> <span>{myProfile.phone}</span></li>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>City:</strong> <span>{myProfile.address}</span></li>
									</ul>
								</Col>
								<Col lg={6}>
									<ul>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Age:</strong> <span>{myProfile.age}</span></li>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Degree:</strong> <span>Fresher</span></li>
										<li className='about-item'><KeyboardArrowRight className='about-item-icon' /> <strong>Email:</strong> <span>{myProfile.email}</span></li>
									</ul>
								</Col>
							</Row>
						</div>
						<p className='about-slogan'>
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