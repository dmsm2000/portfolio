import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  python,
  sql,
  flutter,
  android,
  java,
  ios,
  sevenevents,
drivewithfriends,
getfit,
mario,
smarthome
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend',
    icon: frontend,
  },
  {
    title: 'Backend',
    icon: backend,
  },
  {
    title: 'Mobile',
    icon: ux,
  },
  {
    title: 'Software Architecture',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'flutter',
    icon: flutter,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'android',
    icon: android,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'ios',
    icon: ios,
  },

];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'TecSide',
    date: '04/2021 – 03/2022 ',
    iconBg: '#333333',
  },
  {
    title: 'iOS mobile developer Trainee',
    company_name: 'LOQR',
    date: '04/2022 – 08/2022',
    iconBg: '#333333',
  },
  {
    title: 'Mobile developer',
    company_name: 'LOQR',
    date: '05/09/2022 – 18/01/2023',
    iconBg: '#333333',
  },
  {
    title: 'Mobile developer',
    company_name: 'CGI',
    date: '01/02/2023 – Present',
    iconBg: '#333333',
  },
];

const projects = [

  {
    id: 'project-2',
    name: 'Genetic Algorithm',
    description: 'In the "Artificial Intelligence" course, I developed a project centered around creating a genetic algorithm for optimizing gameplay in Super Mario Bros. This involved iterating and refining the algorithm through simulations of natural selection and genetic variation to achieve optimal performance.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'linux',
        color: 'green-text-gradient',
      },
    ],
    image: mario,
  },
  {
    id: 'project-3',
    name: '7EVENTS',
    description: '7EVENTS is a web application developed in Angular as part of the "Programming in a Web Environment" course. It serves as a solution for cultural event promoters facing logistical challenges due to pandemic restrictions. The application communicates with a REST API developed in ExpressJS.',
    tags: [
      {
        name: 'node',
        color: 'blue-text-gradient',
      },
      {
        name: 'angular',
        color: 'green-text-gradient',
      },
    ],
    image: sevenevents,
  },
  {
    id: 'project-4',
    name: 'DriveWithFriends',
    description: 'A project within the scope of "Distributed Systems" is a desktop application developed in java that simulates the famous "Waze" navigation system. It consisted of applying the concepts learned in the classroom on the different communication protocols (UDP and TCP).',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'tcp',
        color: 'green-text-gradient',
      },
      {
        name: 'udp',
        color: 'green-text-gradient',
      },
    ],
    image: drivewithfriends,
  },
  {
    id: 'project-5',
    name: 'GetFit',
    description: 'A project within the scope of the subject "Mobile and ubiquitous computing" is a mobile application for the android system developed in kotlin capable of recommending places to practice physical exercises, as well as tracking them.',
    tags: [
      {
        name: 'kotlin',
        color: 'blue-text-gradient',
      },
      {
        name: 'android',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: getfit,
  },
  {
    id: 'project-6',
    name: 'SmartHome',
    description: 'A project within the scope of the "Software Lab" course is a web application developed in Angular capable of communicating with a rest api developed in .NetCore 6, which aims to remotely control devices in a home as well as control expenses of housing',
    tags: [
      {
        name: '.NET',
        color: 'blue-text-gradient',
      },
      {
        name: 'angular',
        color: 'green-text-gradient',
      },
      {
        name: 'scrum',
        color: 'green-text-gradient',
      },
    ],
    image: smarthome,
  },
];

export { services, technologies, experiences, projects };
