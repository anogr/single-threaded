import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const lang = location.pathname.split("/")[1] === "sv" ? "sv" : "en";

	const handleLangChange = (lng: "sv" | "en") => {
		if (lng !== lang) {
			i18n.changeLanguage(lng);
			const newPath = location.pathname.replace(/^\/(en|sv)/, `/${lng}`);
			navigate(newPath, { replace: true });
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xs border-b border-border">
			<nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
				<button
					type="button"
					className="text-base md:text-lg font-semibold text-foreground bg-transparent border-none p-0 m-0 cursor-pointer"
					aria-label="Scroll to top"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					Single Threaded
				</button>
				<ul className="hidden md:flex items-center gap-8 text-sm">
					<li>
						<a
							href="#about"
							className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
						>
							{t("about")}
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
						>
							{t("servicesTitle")}
						</a>
					</li>
					<li>
						<a
							href="#experience"
							className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
						>
							{t("experience")}
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
						>
							{t("contactTitle")}
						</a>
					</li>
				</ul>
				<div className="ml-4 flex items-center gap-2 text-xs font-semibold">
					<button
						type="button"
						onClick={() => handleLangChange("sv")}
						className={cn(
							"text-foreground cursor-pointer",
							lang === "sv" && "underline",
						)}
						aria-label={t("switchToSwedish")}
					>
						SV
					</button>
					<span>|</span>
					<button
						type="button"
						onClick={() => handleLangChange("en")}
						className={cn(
							"text-foreground cursor-pointer",
							lang === "en" && "underline",
						)}
						aria-label={t("switchToEnglish")}
					>
						EN
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
