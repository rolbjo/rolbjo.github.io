import { projects } from './projects'
import styles from './projectView.module.css'

type Project = {
  title: string
  description?: string
  techStack: string[]
  visit: string
  image: string
  source: string
}

const ProjectsView = () => {
  return (
    <div id='projects' className={styles.gridContainer}>
      {projects.map((project: Project, index: number) => (
        <div className={styles.flexContainer} key={index}>
          <img src={project.image} alt='' />
          <h3>{project.title}</h3>
          <hr />
          <p className={styles.description}>{project.description}</p>
          <div className={styles.techDiv}>Tech stack</div>
          <hr />
          <ul className={styles.list}>
            {project.techStack.map((tech: string, index: number) => (
              <li className={styles.listItem} key={index}>
                {tech}
              </li>
            ))}
          </ul>

          <ul className={styles.list2}>
            <li className={styles.listItem}>
              <a className={styles.a} href={project.visit}>
                Live preview
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.a} href={project.source}>
                Source code
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ProjectsView
