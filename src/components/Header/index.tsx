import { IconDefinition, faChartBar, faEnvelope, faFile, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useState } from 'react';

type NavItemType = {
	href: string;
	icon: IconDefinition;
	label: string;
}

const navLists: NavItemType[] = [
	{
		href: '#hero',
		icon: faHouse,
		label: 'Home',
	},
	{
		href: '#about',
		icon: faUser,
		label: 'About',
	},
	{
		href: '#resume',
		icon: faFile,
		label: 'Resume',
	},
	{
		href: '#portfolio',
		icon: faFile,
		label: 'Portfolio',
	},
	{
		href: '#contact',
		icon: faEnvelope,
		label: 'Contact',
	},
]

const Header: FC = () => {
	const [active, setActive] = useState('#hero');
	const handleClick = (href: string): MouseEventHandler<HTMLLIElement> => () => {
		setActive(href);
	};
	return (
		<header id='header' className='flex flex-col justify-center'>
			<nav id='navbar' className='nav-menu'>
				<ul>
					{
						navLists.map((item) => {
							if (active === item.href) {
								return (
									<li key={item.label} onClick={handleClick(item.href)}>
										<a className='nav-item-link active' href={item.href}><FontAwesomeIcon fontSize={14} icon={item.icon} /> <span className='hidden'>{item.label}</span></a>
									</li>
								)
							}
							return (
								<li key={item.label} onClick={handleClick(item.href)}>
									<a className='nav-item-link' href={item.href}><FontAwesomeIcon fontSize={14} icon={item.icon} /> <span className='hidden'>{item.label}</span></a>
								</li>
							)
						})
					}
				</ul>
			</nav >
		</header >
	)
}

export default Header