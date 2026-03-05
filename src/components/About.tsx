import { useTranslation } from "react-i18next";
import andreasPhoto from "@/assets/andreas-ogren.jpg";

const About = () => {
	const { t } = useTranslation();
	return (
		<section id="about" className="bg-card scroll-mt-8 md:scroll-mt-0">
			<div className="section-container">
				<h2 className="section-title">{t("about")}</h2>
				<div className="grid md:grid-cols-3 gap-12 items-start md:items-center">
					<div className="md:col-span-1 md:mt-16">
						<div className="aspect-square bg-muted rounded-lg overflow-hidden">
							<img
								src={andreasPhoto}
								alt="Andreas Ögren"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="md:col-span-2">
						<h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
							Andreas Ögren
						</h2>
						<div className="space-y-4 text-muted-foreground leading-relaxed">
							<p>{t("about1")}</p>
							<p>{t("about2")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
