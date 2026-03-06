import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import { langLoader } from "./pages/langLoader";
import NotFound from "./pages/NotFound";

function LanguageRedirect() {
	const lang = navigator.language.startsWith("sv") ? "sv" : "en";
	return <Navigate to={`/${lang}`} replace />;
}

function LangGuard({ children }: { children: React.ReactNode }) {
	const location = useLocation();
	const lang = location.pathname.split("/")[1];
	if (lang !== "sv" && lang !== "en") {
		return <Navigate to="/en" replace />;
	}
	return <>{children}</>;
}

export default function AppRouter() {
	return (
		<BrowserRouter>
			<LangGuard>
				<Routes>
					<Route path="/" element={<LanguageRedirect />} />
					<Route path=":lang" element={<Index />} loader={langLoader} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</LangGuard>
		</BrowserRouter>
	);
}
