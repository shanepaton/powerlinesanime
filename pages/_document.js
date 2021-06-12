import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="title" content="Powerlines in Anime" />
					<link rel="../public/favicon.svg" />
					<meta name="description" content="Powerlines in anime" />
				</Head>

				<Main />
				<NextScript />

			</Html>
		);
	}
}