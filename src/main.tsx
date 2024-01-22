import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App";

// @ts-expect-error all good
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<App />
		</ClerkProvider>
	</React.StrictMode>
);
