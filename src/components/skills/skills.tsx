import styles from './skills.module.css'
import { DiHtml5 } from 'react-icons/di'
import { SiCss3, SiMicrosoftazure, SiCypress } from 'react-icons/si'
import { RiJavascriptFill, RiNextjsLine } from 'react-icons/ri'
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoMongodb,
} from 'react-icons/bi'
import { FaReact, FaVuejs, FaGitAlt, FaNode, FaDocker } from 'react-icons/fa'

const skills = [
  {
    id: 'html',
    component: DiHtml5,

    name: 'HTML',
    description: 'Markup language for creating web pages',
  },
  {
    id: 'css',
    component: SiCss3,
    name: 'CSS',
    description: 'Style sheet language for designing web pages',
  },
  {
    id: 'javascript',
    component: RiJavascriptFill,
    name: 'Javascript',
    description: 'Programming language for web development',
  },
  {
    id: 'typescript',
    component: BiLogoTypescript,
    name: 'Typescript',
    description: 'Typed superset of JavaScript',
  },
  {
    id: 'react',
    component: FaReact,
    name: 'React',
    description: 'JavaScript library for building user interfaces',
  },
  {
    id: 'next',
    component: RiNextjsLine,
    name: 'Next',
    description: 'React framework for server-side rendering',
  },
  {
    id: 'vue',
    component: FaVuejs,
    name: 'Vue',
    description: 'JavaScript framework for building user interfaces',
  },
  {
    id: 'git',
    component: FaGitAlt,
    name: 'Git',
    description: 'Version control system for tracking changes in code',
  },
  {
    id: 'node',
    component: FaNode,
    name: 'Node',
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
  {
    id: 'postgresql',
    component: BiLogoPostgresql,
    name: 'PostgreSQL',
    description: 'Open-source relational database management system',
  },
  {
    id: 'mongodb',
    component: BiLogoMongodb,
    name: 'MongoDB',
    description: 'Document-oriented NoSQL database',
  },
  {
    id: 'docker',
    component: FaDocker,
    name: 'Docker',
    description: 'Containerization platform for deploying applications',
  },
  {
    id: 'azure',
    component: SiMicrosoftazure,
    name: 'Azure',
    description:
      'Cloud computing service for building, testing, deploying, and managing applications',
  },
  {
    id: 'cypress',
    component: SiCypress,
    name: 'Cypress',
    description: 'End-to-end testing framework for web applications',
  },
]

const Skills = () => {
  return (
    <section className={styles.skillsWrapper} id='skills'>
      <h2>Skills</h2>
      <p className={styles.skillText}>
        {`I have gained experience working with a variety of technologies as a developer.
        I've developed and maintained multiple projects using these technologies, and I'm always eager to learn more.`}
      </p>
      <ul className={styles.gridSkill}>
        {skills.map((skill, index) => (
          <li className={styles.flexSkill} key={index}>
            <skill.component size={30} />
            <div>
              <h4 className={styles.skillHeader}>{skill.name}</h4>
              <div className={styles.skillDescription}>{skill.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
