import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

const Index = () => {
	const { lang } = useParams<{ lang: string }>();
	const { i18n } = useTranslation();

	const resolvedLanguage = lang === "sv" ? "sv" : "en";

	useEffect(() => {
		if (i18n.language !== resolvedLanguage) {
			i18n.changeLanguage(resolvedLanguage);
		}
	}, [resolvedLanguage, i18n]);

	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Experience />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
