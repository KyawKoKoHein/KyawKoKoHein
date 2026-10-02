import { Experience } from '../models';

export const EXPERIENCE: readonly Experience[] = [
  {
    company: 'NTT DATA Myanmar',
    role: 'Developer',
    period: 'Oct 2024 – Present',
    current: true,
    summary: 'Building and supporting gateway applications and backend services for enterprise banking systems.',
    responsibilities: [
      'Develop and maintain gateway applications and backend services for enterprise banking.',
      'Turn business requirements and specifications into tested application functions and enhancements.',
      'Prepare Internal Design Documents from External Designs, plus MUT and related technical documentation.',
      'Handle coding, debugging, testing and system enhancement across the development lifecycle.',
      'Support deployment, maintenance and production activities, including incident investigation.',
    ],
    achievements: [
      'Diagnose and resolve production defects through log analysis and root-cause investigation.',
      'Improve delivery quality by reviewing design documents, test cases, test results and bug reports for inconsistencies.',
      'Work with Japan HQ and Global Engineering Teams to analyse technical issues and coordinate solutions.',
      'Deliver assigned tasks to project schedules while collaborating closely with team members.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Apache Tomcat'],
  },
  {
    company: 'Myanmar Information Technology Pte. Ltd.',
    role: 'Web Developer',
    period: 'Sept 2023 – Oct 2024',
    summary: 'Developed banking applications and RESTful APIs across core and mobile banking products.',
    responsibilities: [
      'Developed and maintained Core Banking and Mobile Banking applications using Java and Spring Boot.',
      'Designed and built RESTful APIs for enterprise banking systems.',
      'Implemented customer requirements and enhanced existing software features.',
      'Took part in software analysis, development, testing, deployment and maintenance.',
    ],
    achievements: [
      'Delivered Digital Financial Solutions and a Mobile Banking Admin Console.',
      'Resolved production issues and optimised application performance.',
      'Ran unit testing, debugging and deployments on Apache Tomcat.',
      'Collaborated with project teams from analysis through to deployment.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'Angular', 'Apache Tomcat'],
  },
];
