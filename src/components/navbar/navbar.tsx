import styles from './navbar.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarItem}>
        <li>Roland Björndahl</li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className={styles.navbarItem}>
        <a href='https://www.linkedin.com/in/roland-bj%C3%B6rndahl-69bb80266/'>
          <AiFillLinkedin size={30} />
        </a>
        <a href='https://github.com/rolbjo'>
          <AiFillGithub size={30} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
