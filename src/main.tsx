import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/extensions
import App from "./App.tsx";
import "./styles/reset.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer from "./features/quote";

const store = configureStore({
	reducer: {
		quote: quoteReducer
	}
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
