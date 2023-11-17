import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { StaticImageData } from "next/image";
import amazing from "../../public/Amazing.png";
import funnychat from "../../public/funnychat.png";
import moment from "../../public/moment.png";
import php from "../../public/projectphp.png";
import netflix from "../../public/netflix.png";
import traffic from "../../public/traffic.png";
import cnn from "../../public/cnn.png";
import expressJsFramework from "../../public/ExpressJsFramework.png";

export type SocialItemType = {
  label: string;
  href: string;
  icon: IconDefinition;
};

export const socialList: SocialItemType[] = [
  {
    label: "Github",
    href: "https://github.com/tranhuuvinh1109",
    icon: faGithub,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/vinhdeveloper2002",
    icon: faFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/huuvinh09/",
    icon: faInstagram,
  },
  {
    label: "Gmail",
    href: "",
    icon: faEnvelope,
  },
];

export type ProfileType = {
  title: string;
  work: string;
  slogan: string;
  birthday: string;
  phone: string;
  age: number;
  email: string;
  address: string;
};

export const myProfile: ProfileType = {
  title:
    "Believe in yourself and never give up, for the greatest achievements are born from unwavering determination",
  work: "Frontend Developer & Backend Developer",
  slogan:
    "Hello, I'm Huu Vinh. I'm a passionate developer. I thrive on challenges and enjoy finding innovative solutions. With a strong dedication to continuous learning, I strive to grow both personally and professionally. I believe in the power of collaboration and enjoy working in diverse teams to achieve remarkable results. Let's connect and explore new opportunities together!",
  birthday: "11 Sep 2002",
  phone: "+84 915 905 138",
  age: 21,
  email: "Tranhuuvinh1109@gmail.com",
  address: "HaTinh, VietNam",
};

export type SkillType = {
  id: number;
  label: string;
  value: number;
};

export const skillList: SkillType[] = [
  {
    id: 1,
    label: "HTML",
    value: 100,
  },
  {
    id: 2,
    label: "CSS",
    value: 90,
  },
  {
    id: 3,
    label: "Java",
    value: 70,
  },
  {
    id: 4,
    label: "C++",
    value: 65,
  },
  {
    id: 5,
    label: "JavaScript",
    value: 80,
  },
  {
    id: 6,
    label: "PHP",
    value: 75,
  },
  {
    id: 7,
    label: "TypeScript",
    value: 75,
  },
  {
    id: 8,
    label: "Python",
    value: 55,
  },
];
export type ProjectType = {
  name: string;
  link: string;
  image?: StaticImageData | undefined;
  description?: string;
  dateTime?: string;
};
export const ProjectList: ProjectType[] = [
  {
    name: "Moment Learning",
    link: "https://moment-learning.vercel.app/",
    image: moment,
    dateTime: "01/06/2023",
  },
  {
    name: "BackEnd Moment Learning",
    link: "https://github.com/tranhuuvinh1109/BE_moment_learning",
    image: php,
    dateTime: "01/06/2023",
  },
  {
    name: "Amazing Trip",
    link: "https://amazing-trip.vercel.app/landing",
    image: amazing,
    dateTime: "10/10/2022",
  },
  {
    name: "Funny Chat",
    link: "https://funny-chat-app.vercel.app/",
    image: funnychat,
    dateTime: "10/06/2022",
  },
  {
    name: "NetFlix Clone",
    link: "https://vinh-netflix.vercel.app/",
    image: netflix,
    dateTime: "01/02/2023",
  },
  {
    name: "NodeJS Course",
    link: "https://github.com/tranhuuvinh1109/learning-nodejs",
    image: expressJsFramework,
    description:
      " Here is the repository, let me teach basic node js with MVC model to my students",
    dateTime: "01/05/2023",
  },
  {
    name: "CNN Create model AI",
    link: "https://cnn-create-model-machine-learning.vercel.app/",
    image: cnn,
    description:
      " Here is the repository, You can create an image classification model based on your custom dataset. The system will help you train the model completely automatically",
    dateTime: "01/11/2023",
  },
  {
    name: "Traffic Detech",
    link: "https://traffic-detect.vercel.app/",
    image: traffic,
    description:
      "Traffic management system from city security cameras. Store images and media information using artificial intelligence.",
    dateTime: "11/11/2023",
  },
];
