import styles from './introduction.module.css'
import Lottie from 'lottie-react'
import Animation from '../../assets/ani.json'

const Introduction = () => {
  return (
    <>
      <section className={styles.gridWrapper}>
        <div>
          <h2>Hi there,</h2>
          <p>
            I'm Roland Björndahl, a fullstack developer with a focus on
            JavaScript. I recently graduated from a two-year program where I
            gained experience in both frontend and backend development, working
            with technologies such as TypeScript, React, Next.js, Node.js, and
            PostgreSQL to name a few. I’m passionate about solving complex
            problems and have a particular interest in contributing to the
            development of modern web applications. I'm currently looking for
            opportunities to apply my skills, expand my knowledge, and make
            meaningful contributions in an organisation.
          </p>
        </div>
        <div className={styles.animationContainer}>
          {<Lottie style={{ height: 500 }} animationData={Animation} />}
        </div>
      </section>
    </>
  )
}

export default Introduction
