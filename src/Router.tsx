import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { langLoader } from "./pages/langLoader";
import NotFound from "./pages/NotFound";

function LanguageRedirect() {
	const lang = navigator.language.startsWith("sv") ? "sv" : "en";
	return <Navigate to={`/${lang}`} replace />;
}

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LanguageRedirect />} />
				<Route path=":lang" element={<Index />} loader={langLoader} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
