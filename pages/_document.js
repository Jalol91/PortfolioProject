import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
				<Script
					strategy='lazyOnload'
					src='assets/libs/tobii/js/tobii.min.js'
				></Script>
				<Script
					strategy='lazyOnload'
					src='assets/libs/jarallax/jarallax.min.js'
				></Script>
				<Script
					strategy='afterInteractive'
					src='assets/libs/feather-icons/feather.min.js'
				></Script>
				<Script strategy='lazyOnload' src='assets/js/plugins.init.js'></Script>
				<Script strategy='lazyOnload' src='assets/js/app.js'></Script>
			</body>
		</Html>
	);
}
