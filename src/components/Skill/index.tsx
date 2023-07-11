import React, { FC, useMemo } from 'react'
import { LinearProgress } from '@mui/material'
import { Col, Container, Row } from 'react-bootstrap'
import { skillList } from '../../const'
import Image from 'next/image'
import reactjs from '../../../public/reactjs.png'
import laravel from '../../../public/laravel.png'
import nextjs from '../../../public/nextjs.png'
import mysql from '../../../public/mysql.png'
import reactnative from '../../../public/reactnative.png'
import docker from '../../../public/docker.webp'

const Skill: FC = () => {
	const renderLeft = useMemo(() => {
		return skillList.slice(0, 4).map((skill) => {
			return (
				<div className='progress' key={skill.id}>
					<p className='skill'>{skill.label} <span className='value-progress'>{skill.value}%</span></p>
					<div className='progress-bar-wrap'>
						<LinearProgress value={skill.value} variant='determinate' className='progress-bar-content' />
					</div>
				</div>
			)
		})
	}, [skillList])
	const renderRight = useMemo(() => {
		return skillList.slice(4).map((skill) => {
			return (
				<div className='progress' key={skill.id}>
					<p className='skill'>{skill.label} <span className='value-progress'>{skill.value}%</span></p>
					<div className='progress-bar-wrap'>
						<LinearProgress value={skill.value} variant='determinate' className='progress-bar-content' />
					</div>
				</div>
			)
		})
	}, [skillList])
	return (
		<section id='skills' className='skills section-bg'>
			<Container>
				<div className='group-title'>
					<h2>Skills</h2>
					<p>I have self-learned and worked with multiple programming languages, fueling my passion for continuous growth and innovation.</p>
				</div>

				<Row>
					<Col lg={6}>
						{
							renderLeft
						}
					</Col>
					<Col lg={6}>
						{
							renderRight
						}
					</Col>
				</Row>
				<Row className='mt-5'>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={reactjs} alt='reactjs' />
					</Col>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={laravel} alt='laravel' />
					</Col>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={nextjs} alt='nextjs' />
					</Col>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={mysql} alt='mysql' />
					</Col>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={docker} alt='docker' />
					</Col>
					<Col className='framework' lg={2} md={2} xs={6}>
						<Image className='img-framework' src={reactnative} alt='reactnative' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Skill