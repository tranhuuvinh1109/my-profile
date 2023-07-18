import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
export type SocialItemType = {
	label: string;
	href: string;
	icon: IconDefinition;
}

export const socialList: SocialItemType[] = [
	{
		label: 'Github',
		href: 'https://github.com/tranhuuvinh1109',
		icon: faGithub
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/vinhdeveloper2002',
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

export type ProfileType = {
	title: string;
	work: string;
	slogan: string;
	birthday: string;
	phone: string;
	age: number;
	email: string;
	address: string;
}

export const myProfile: ProfileType = {
	title: 'Believe in yourself and never give up, for the greatest achievements are born from unwavering determination',
	work: 'Frontend Developer & Backend Developer',
	slogan: "Hello, I'm Huu Vinh. I'm a passionate developer. I thrive on challenges and enjoy finding innovative solutions. With a strong dedication to continuous learning, I strive to grow both personally and professionally. I believe in the power of collaboration and enjoy working in diverse teams to achieve remarkable results. Let's connect and explore new opportunities together!",
	birthday: '11 Sep 2002',
	phone: '+84 915 905 138',
	age: 21,
	email: 'Tranhuuvinh1109@gmail.com',
	address: 'HaTinh, VietNam'
}


export type SkillType = {
	id: number;
	label: string;
	value: number;
}

export const skillList: SkillType[] = [
	{
		id: 1,
		label: 'HTML',
		value: 100
	},
	{
		id: 2,
		label: 'CSS',
		value: 90
	},
	{
		id: 3,
		label: 'Java',
		value: 70
	},
	{
		id: 4,
		label: 'C++',
		value: 65
	},
	{
		id: 5,
		label: 'JavaScript',
		value: 80
	},
	{
		id: 6,
		label: 'PHP',
		value: 75
	},
	{
		id: 7,
		label: 'TypeScript',
		value: 75
	},
	{
		id: 8,
		label: 'Python',
		value: 55
	}
]