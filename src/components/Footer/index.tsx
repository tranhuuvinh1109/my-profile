import React, { FC } from 'react'
import { socialList } from '../../const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'

const Footer: FC = () => {
	return (
		<footer id="footer" className='mt-10'>
			<Container>
				<h3>Tran Huu Vinh</h3>
				<div className="social-links">
					{
						socialList.map(social => {
							return (
								<a href={social.href} target='_blank' className='social-item-footer' key={social.label}><FontAwesomeIcon icon={social.icon} /></a>
							)
						})
					}
				</div>
				<div>
					<p className='text-lg font-medium'>
						Phone: +84 915 905 138
					</p>
					<p className='text-lg font-medium'>
						Email: Tranhuuvinh1109@gmail.com
					</p>
				</div>
			</Container>
		</footer>
	)
}

export default Footer