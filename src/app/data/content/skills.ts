import { SkillCategory } from '../models';

const icon = (n: string) => `icons/tech/${n}.svg`;

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  { id: 'frontend', label: 'Frontend', skills: [
    { name: 'Angular', icon: icon('angular') }, { name: 'JavaScript', icon: icon('javascript') },
    { name: 'HTML' }, { name: 'CSS' }, { name: 'Bootstrap' }, { name: 'jQuery' } ] },
  { id: 'backend', label: 'Backend', skills: [
    { name: 'Java', icon: icon('java') }, { name: 'Spring Boot', icon: icon('spring-boot') },
    { name: 'PHP', icon: icon('php') }, { name: 'Laravel', icon: icon('laravel') },
    { name: 'REST APIs' }, { name: 'JSON' }, { name: 'XML' } ] },
  { id: 'database', label: 'Database', skills: [
    { name: 'PostgreSQL', icon: icon('postgresql') }, { name: 'MySQL', icon: icon('mysql') },
    { name: 'MS SQL Server', icon: icon('sql-server') } ] },
  { id: 'infrastructure', label: 'Infrastructure', skills: [
    { name: 'Apache Tomcat', icon: icon('tomcat') }, { name: 'Windows Server' }, { name: 'Application Deployment' } ] },
  { id: 'tools', label: 'Tools & Testing', skills: [
    { name: 'Git' }, { name: 'JMeter' }, { name: 'Figma' }, { name: 'Unit Testing' } ] },
  { id: 'practices', label: 'Engineering Practices', skills: [
    { name: 'Object-Oriented Programming' }, { name: 'API Development' }, { name: 'Technical Documentation' },
    { name: 'Debugging & Troubleshooting' }, { name: 'Production Support' }, { name: 'Project Planning' },
    { name: 'UI/UX Design' } ] },
];
