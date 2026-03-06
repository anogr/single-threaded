import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className="relative min-h-screen flex items-center pt-16">
			<div className="absolute inset-0 z-0">
				<img src={heroImage} alt="" className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
			</div>
			<div className="section-container relative z-10">
				<div className="max-w-2xl">
					<h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
						{t("title")}
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
						{t("subtitle")}
					</p>
					<a
						href="#contact"
						className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded transition-opacity duration-200 hover:bg-primary/80 active:bg-primary/70"
					>
						{t("getInTouch")}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
