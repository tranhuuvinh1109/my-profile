import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '@mui/icons-material'
import Image from 'next/image'
import amazing from '../../../public/Amazing.png'
import funnychat from '../../../public/funnychat.png'
import moment from '../../../public/moment.png'
import php from '../../../public/projectphp.png'
import netflix from '../../../public/netflix.png'
import expressJsFramework from '../../../public/ExpressJsFramework.png'

const Portfolio: FC = () => {
	return (
		<section id='experience' className='portfolio section-bg pt-10' data-aos='fade-left'>
			<Container>
				<div className='group-title'>
					<h2>Experience</h2>
					<p>I have been involved in various projects, ranging from personal endeavors to collaborative team projects, allowing me to broaden my skills and thrive in diverse work environments.</p>
				</div>
				<Row className='portfolio-container'>
					<Col lg={4} md={6} className='portfolio-item filter-app mb-10'>
						<div className='portfolio-wrap'>
							<Image src={moment} alt='moment' />
							<div className='portfolio-info'>
								<h4>Moment Learning</h4>
								<p>Website</p>
								<div className='portfolio-links'>
									<a href='https://moment-learning.vercel.app/' target='_blank'><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-web'>
						<div className='portfolio-wrap'>
							<Image src={php} alt='php' />
							<div className='portfolio-info'>
								<h4>BackEnd Moment Learning</h4>
								<p>Website</p>
								<div className='portfolio-links'>
									<a href='https://github.com/tranhuuvinh1109/BE_moment_learning' target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-card'>
						<div className='portfolio-wrap'>
							<Image src={amazing} alt='amazing Trip' />
							<div className='portfolio-info'>
								<h4>Amazing Trip</h4>
								<p>Website</p>
								<div className='portfolio-links'>
									<a href='https://amazing-trip.vercel.app/landing' target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<Image src={funnychat} alt='funnychat' />
							<div className='portfolio-info'>
								<h4>Funny Chat</h4>
								<p>Website</p>
								<div className='portfolio-links'>
									<a href='https://funny-chat-app.vercel.app/' target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<Image src={netflix} alt='netflix' />
							<div className='portfolio-info'>
								<h4>NetFlix Clone</h4>
								<p>Website</p>
								<div className='portfolio-links'>
									<a href='https://vinh-netflix.vercel.app/' target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-app'>
						<div className='portfolio-wrap'>
							<Image src={expressJsFramework} alt='Nodejs' />
							<div className='portfolio-info'>
								<h4>NodeJS Course</h4>
								<p>Here is the repository, let me teach basic node js with MVC model to my students</p>
								<div className='portfolio-links'>
									<a href='https://github.com/tranhuuvinh1109/learning-nodejs' target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Portfolio