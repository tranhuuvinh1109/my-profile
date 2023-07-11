import { IconDefinition, faEnvelope, faFile, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHouse, faPaperclip, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, MouseEventHandler, useState } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive } from '../../redux/reducers/active';

type NavItemType = {
	href: string;
	icon: IconDefinition;
	label: string;
}

const navLists: NavItemType[] = [
	{
		href: '#home',
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
		href: '#skill',
		icon: faKeyboard,
		label: 'Skill',
	},
	{
		href: '#certificate',
		icon: faUserGraduate,
		label: 'Certificate',
	},
	{
		href: '#experience',
		icon: faPaperclip,
		label: 'Experience',
	},
	{
		href: '#footer',
		icon: faEnvelope,
		label: 'Contact',
	},
]

const Header: FC = () => {
	const activeState = useSelector<RootState>(state => state.active.active)
	const dispatch = useDispatch();
	const handleClick = (href: string): MouseEventHandler<HTMLLIElement> => () => {
		dispatch(changeActive(href))
	};
	return (
		<header id='header' className='flex flex-col justify-center'>
			<nav id='navbar' className='nav-menu'>
				<ul>
					{
						navLists.map((item) => {
							if (activeState === item.href) {
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