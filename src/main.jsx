import React from "react"
import ReactDOM from "react-dom/client"
import { ContextProvider } from "./Contexts/ContextProvider"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"
import App from "./App"
import "./index.css"
import ScrollToTop from "./Utils/scrollToTop"

axios.defaults.baseURL = "https://instruo-server.onrender.com"
// axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*"

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</ContextProvider>
)
