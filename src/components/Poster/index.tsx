import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { IconDefinition, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import TypingEffect from '../TypingEffect'

type SocialItemType = {
	label: string;
	href: string;
	icon: IconDefinition;
}

const socialList: SocialItemType[] = [
	{
		label: 'Github',
		href: 'https://github.com/tranhuuvinh1109',
		icon: faGithub
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/profile.php?id=100081203333837',
		icon: faFacebook
	},
	{
		label: 'Instagram',
		href: 'https://www.instagram.com/huuvinh09/',
		icon: faInstagram
	},
	{
		label: 'Gmail',
		href: '',
		icon: faEnvelope
	}
]
const Poster: FC = () => {
	return (
		<div id='poster' className="flex flex-col justify-center">
			<Container className="relative z-10">
				<h1 className='name'>Tran Huu Vinh</h1>
				<p className='work flex'>I am <TypingEffect /></p>
				<div className="social-links mt-10 flex z-50">
					{
						socialList.map((item) => {
							return (
								<a href={item.href} target="_blank" className='w-8' key={item.label}>
									<FontAwesomeIcon fontSize={14} icon={item.icon} />
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
