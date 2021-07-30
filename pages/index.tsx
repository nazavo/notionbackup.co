import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Safely Backup Your Notion Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            🛡️ Backup All Your Notion Data
        </h1>

        <p className={styles.description}>
            Be the first to secure your knowledge base, join the notification list!
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nazavo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build with avo-fueled love by Naz Avó 🇦🇪
        </a>
      </footer>
    </div>
  )
}
