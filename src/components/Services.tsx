import { useTranslation } from "react-i18next";

const Services = () => {
	const { t } = useTranslation();
	const services = t("services", { returnObjects: true });

	return (
		<section id="services" className="scroll-mt-8 md:scroll-mt-0">
			<div className="section-container">
				<h2 className="section-title">{t("servicesTitle")}</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{services.map((service) => (
						<div
							key={service.title}
							className="p-6 rounded-lg border border-border"
						>
							<h3 className="text-lg font-semibold text-foreground mb-3">
								{service.title}
							</h3>
							<p className="text-muted-foreground leading-relaxed">
								{service.content}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
