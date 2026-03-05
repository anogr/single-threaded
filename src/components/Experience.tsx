import { useTranslation } from "react-i18next";

const Experience = () => {
	const { t } = useTranslation();
	const clients = t("clients", { returnObjects: true });

	return (
		<section id="experience" className="bg-card scroll-mt-8 md:scroll-mt-0">
			<div className="section-container">
				<h2 className="section-title">{t("experience")}</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{clients.map((client) => (
						<div key={client.name} className="text-center p-6">
							<p className="text-lg font-semibold text-foreground mb-1">
								{client.name}
							</p>
							<p className="text-sm text-muted-foreground">
								{client.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<a
						href="https://www.linkedin.com/in/andreasogren/"
						target="_blank"
						rel="noopener noreferrer"
						className="link-underline text-primary hover:text-primary/80 transition-colors duration-200"
					>
						{t("viewLinkedIn")}
					</a>
				</div>
			</div>
		</section>
	);
};

export default Experience;
