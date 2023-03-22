import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Navbar>
				<Component {...pageProps} />;
			</Navbar>
		</Provider>
	);
}
