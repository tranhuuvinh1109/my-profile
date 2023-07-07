import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from '@mui/icons-material'
import Image from 'next/image'
import amazing from '../../../public/Amazing.png'

const Portfolio: FC = () => {
	return (
		<div id="Experience" className="portfolio section-bg pt-10">
			<Container>
				<div className="group-title">
					<h2>Experience</h2>
					<p>I have been involved in various projects, ranging from personal endeavors to collaborative team projects, allowing me to broaden my skills and thrive in diverse work environments.</p>
				</div>
				<Row className='portfolio-container'>
					<Col lg={4} md={6} className='portfolio-item filter-app mb-10'>
						<div className="portfolio-wrap">
							<img src="https://moment-learning.vercel.app/static/media/logo.c91ff9dc94173d493508.png" className="img" alt="" />
							<div className="portfolio-info">
								<h4>Moment Learning</h4>
								<p>Website</p>
								<div className="portfolio-links">
									<a href="https://moment-learning.vercel.app/" target='_blank'><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-web'>
						<div className="portfolio-wrap">
							<img src="https://vinasupport.com/uploads/2021/01/Laravel-PHP-Framework.png" className="img" alt="" />
							<div className="portfolio-info">
								<h4>BackEnd Moment Learning</h4>
								<p>Website</p>
								<div className="portfolio-links">
									<a href="https://github.com/tranhuuvinh1109/BE_moment_learning" target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-card'>
						<div className="portfolio-wrap">
							<Image src={amazing} alt='Âmzing Trip' />
							<div className="portfolio-info">
								<h4>Amazing Trip</h4>
								<p>Website</p>
								<div className="portfolio-links">
									<a href="https://amazing-trip.vercel.app/landing" target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={4} md={6} className='portfolio-item filter-app'>
						<div className="portfolio-wrap">
							<img src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png" className="img" alt="" />
							<div className="portfolio-info">
								<h4>Funny Chat</h4>
								<p>Website</p>
								<div className="portfolio-links">
									<a href="https://funny-chat-app.vercel.app/" target='_blank' ><Link /></a>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Portfolio