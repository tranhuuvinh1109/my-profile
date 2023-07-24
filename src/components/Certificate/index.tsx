import Image from 'next/image'
import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Scrum from '../../../public/ScumCertificate.png'
import Laravel from '../../../public/LaravelCertificate.jpg'
import ReactJS from '../../../public/ReactCertificate.jpg'
import Git from '../../../public/GitCertificate.jpg'


const Certificate: FC = () => {
	return (
		<section id='certificate' className='pt-10' data-aos='fade-right'>
			<Container>
				<div className='group-title'>
					<h2>Certificate</h2>
					<p>Here are the certificates I have achieved.</p>
				</div>
				<Row className='mt-8'>
					<Col lg={6} xs={12} className='mb-6'>
						<Image src={Scrum} alt='Scrum Certificate' />
					</Col>
					<Col lg={6} xs={12} className='mb-6'>
						<Image src={Laravel} alt='Laravel Certificate' />
					</Col>
					<Col lg={6} xs={12} className='mb-6'>
						<Image src={ReactJS} alt='ReactJS Certificate' />
					</Col>
					<Col lg={6} xs={12} className='mb-6'>
						<Image src={Git} alt='Git Certificate' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Certificate