import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Powerlines from '../components/Powerline'

export default function Home() {
	return (
		<div className={styles.container}>

			<header className={styles.header}>
				<h1>Powerlines in anime</h1>
			</header>

			<main className={styles.main}>
				<Powerlines />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://powerlines.racks.ninja/"
					target="_blank"
					rel="noopener noreferrer"
				>

					<span >
						Powerlines API
					</span>
				</a>
				<a
					href="https://powerlinesinanime.tumblr.com/"
					target="_blank"
					rel="noopener noreferrer"
				>

					<span >
						Image Source
					</span>
				</a>
			</footer>
		</div>
	)
}
