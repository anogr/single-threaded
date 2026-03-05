import { useTranslation } from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section id="contact" className="scroll-mt-8 md:scroll-mt-0">
			<div className="section-container">
				<h2 className="section-title">{t("contactTitle")}</h2>
				<div className="max-w-xl">
					<h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
						{t("contact.title")}
					</h3>
					<p className="text-muted-foreground leading-relaxed mb-8">
						{t("contact.content")}
					</p>
					<div className="space-y-4">
						<a
							href="mailto:andreas.ogren@singlethreaded.se"
							className="block p-4 rounded-lg border border-border card-hover"
						>
							<p className="text-sm text-muted-foreground mb-1">{t("email")}</p>
							<p className="text-foreground">andreas.ogren@singlethreaded.se</p>
						</a>
						<a
							href="https://www.linkedin.com/in/andreasogren/"
							target="_blank"
							rel="noopener noreferrer"
							className="block p-4 rounded-lg border border-border card-hover"
						>
							<p className="text-sm text-muted-foreground mb-1">
								{t("linkedin")}
							</p>
							<p className="text-foreground">linkedin.com/in/andreasogren</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
