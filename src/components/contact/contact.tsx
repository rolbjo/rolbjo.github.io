import React, { useState } from 'react'
import styles from './contact.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(true)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch('https://formspree.io/f/xovqqnwv', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      setStatus('SUCCESS')
      setShowForm(false)
      form.reset()
      setTimeout(() => {
        setStatus(null)
        setShowForm(true)
      }, 5000) // Show the message for 5 seconds
    } else {
      setStatus('ERROR')
    }
  }

  return (
    <div id='contact' className={styles.contactWrapper}>
      {showForm ? (
        <form className={styles.contactFields} onSubmit={handleSubmit}>
          <h1 className={styles.contactHeader}>Send A Message</h1>
          <input placeholder='Your name' name='name' type='text' required />
          <input placeholder='Your Email' name='email' type='email' required />
          <input placeholder='Subject' name='subject' type='text' required />
          <textarea
            placeholder='Message'
            name='message'
            rows={5}
            required
          ></textarea>
          <button type='submit' className={styles.button}>
            Send Message
          </button>
        </form>
      ) : (
        status === 'SUCCESS' && (
          <p className={styles.contactMessage}>
            Thank you! Your message has been sent.
          </p>
        )
      )}
      {status === 'ERROR' && <p>Oops! There was an error. Please try again.</p>}

      <div>
        <h1 className={styles.contactHeader}>Get In Touch</h1>
        <p className={styles.contactIntroduction}>
          {`Whether you want to get in touch, talk about a project collaboration,or just say hi, I'd love to hear from you.
          Simply fill the form and send me an email.`}
        </p>
        <div className={styles.contactIcons}>
          <a href='https://www.linkedin.com/in/roland-bj%C3%B6rndahl-69bb80266/'>
            <AiFillLinkedin size={30} color='#0077b5' />
          </a>
          <a href='https://github.com/rolbjo'>
            <AiFillGithub size={30} color='#333' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
