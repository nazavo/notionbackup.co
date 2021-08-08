import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  let underlineStyle = {
    'boxShadow': 'inset 0 -0.1666666667em 0 0 #fff, inset 0 -0.3333333333em 0 0 #bae6fd'
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Easy Backup For Notion</title>
        <meta name="description" content="Easy backup scheduling for your notion documents" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
            🛡️ Backup Your Notion Data
        </h1>

        <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
            Be the first to secure your knowledge base, <a href="https://fqj8kpv5rm7.typeform.com/to/CEQx3jkD" className="text-light-blue-600 font-semibold" style={underlineStyle}>join the notification list</a>!
        </p>
        
        <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl">
            <cite className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6">
                The export function in the Notion is great for downloading all of your data in Markdown/CSV format. It is still a manual process and a bit limiting. NotionBackup aims to be a set-and-forget solution for people who value their time and data security. 
                <br />
                - <a href="https://twitter.com/naz_avo/status/1424335826520092674" target="_blank" rel="noopener noreferrer">Naz Avó</a>
            </cite>
        </blockquote>

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
