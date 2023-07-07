import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import TypingEffect from '../TypingEffect'
import { socialList } from '../../const'


const Poster: FC = () => {
	return (
		<div id='home' className="flex flex-col justify-center">
			<Container className="relative z-10">
				<h1 className='name'>Tran Huu Vinh</h1>
				<p className='work flex'>I am <TypingEffect /></p>
				<div className="social-links mt-10 flex z-50">
					{
						socialList.map((item) => {
							return (
								<a href={item.href} target="_blank" className='w-8' key={item.label}>
									<FontAwesomeIcon fontSize={20} icon={item.icon} />
								</a>
							)
						})
					}
				</div>
			</Container>
		</div>
	)
}

export default Poster;
