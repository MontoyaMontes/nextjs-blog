import Head from "next/head"
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

const name = "Montoya"

export default function Layout({ children, title, description, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta
                    content={description}
                >
                </meta>
            </Head>

            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/img/416-600x600.jpg"
                            alt="Picture of the author"
                            width={144}
                            height={144}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/img/416-600x600.jpg"
                                    alt="Picture of the author"
                                    width={108}
                                    height={108}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            <nav>
                <Link href="/">
                    <a>Inicio | </a>
                </Link>
                <Link href="/blog">
                    <a>Blog | </a>
                </Link>
                <Link href="/contacto">
                    <a>Contacto | </a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>

            <main>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

Layout.defaultProps = {
    title: "Next.js | sitio web",
    description: "Descripción genérica"
}