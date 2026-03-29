import { useTranslation } from "react-i18next";
import iconLinkedin from "@/assets/icon-linkedin.svg";
import iconMail from "@/assets/icon-mail.svg";

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
							<div className="flex items-center gap-2">
								<img src={iconMail} alt="" width={20} height={20} aria-hidden="true" />
								<p className="text-foreground">andreas.ogren@singlethreaded.se</p>
							</div>
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
							<div className="flex items-center gap-2">
								<img src={iconLinkedin} alt="" width={20} height={20} aria-hidden="true" />
								<p className="text-foreground">linkedin.com/in/andreasogren</p>
							</div>
						</a>
						<a
							href="https://www.brainville.com/SE/SingleThreaded"
							target="_blank"
							rel="noopener"
							className="block p-4 rounded-lg border border-border card-hover"
						>
							<p className="text-sm text-muted-foreground mb-1">
								{t("brainville")}
							</p>
							<div className="flex items-center gap-2">
								<picture>
									<source
										srcSet="https://www.brainville.com/Content/Images/SocialMedia/OnDark_Flat.svg"
										media="(prefers-color-scheme: dark)"
									/>
									<img
										src="https://www.brainville.com/Content/Images/SocialMedia/OnLight_Flat.svg"
										alt="Check out our company profile in Brainville"
										style={{ width: "20px" }}
									/>
								</picture>
								<p className="text-foreground">www.brainville.com/SE/SingleThreaded</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
